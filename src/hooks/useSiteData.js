import { useState, useEffect, useCallback, useRef } from 'react';

// In production: VITE_API_URL = https://shah-api.up.railway.app
// In development: empty string -> Vite proxy handles /api -> localhost:3001
const API_BASE = import.meta.env.VITE_API_URL || '';
const API = `${API_BASE}/api/public`;
const FETCH_TIMEOUT = 8000; // 8s timeout (Railway cold start can be slow)

// Cache buster to avoid browser caching
function bustCache(url) {
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}_t=${Date.now()}`;
}

// Fetch with timeout so we don't hang when backend is down
function fetchWithTimeout(url, ms = FETCH_TIMEOUT) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(timeout));
}

// Shared store for reactive updates across components
const listeners = new Set();
let cached = {
  brands: [],
  categories: [],
  blogPosts: [],
};

function notifyListeners() {
  listeners.forEach(fn => fn());
}

// Call this after any admin operation to trigger refresh
export function refreshSiteData() {
  notifyListeners();
}

// Generic fetch with caching
function useReactiveFetch(url, transformer = (d) => d) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  // Subscribe to refresh notifications
  useEffect(() => {
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);

  // Fetch data
  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(url))
      .then(r => { if (!r.ok) throw new Error('Fetch failed'); return r.json(); })
      .then(d => { if (mountedRef.current) setData(transformer(d)); })
      .catch(() => {
        // Fallback to static data
        // Fallback handled by the catch in the calling hook
      })
      .finally(() => { if (mountedRef.current) setLoading(false); });
  }, [url, version]);

  return { data, loading };
}

// Fetch all brands with counts
export function useBrands() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(`${API}/brands`))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => {
        if (mountedRef.current) {
          if (d && d.length > 0) {
            setData(d);
          } else {
            // Fallback to static data if API returns empty
            import('../data/products.js').then(m => {
              if (mountedRef.current) setData(m.brands);
            });
          }
          setLoading(false);
        }
      })
      .catch(() => {
        import('../data/products.js').then(m => {
          if (mountedRef.current) { setData(m.brands); setLoading(false); }
        });
      });
  }, [version]);

  return { brands: data, loading };
}

// Fetch categories with products
export function useCategories(brandId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = brandId ? `${API}/categories?brandId=${brandId}` : `${API}/categories`;
    fetchWithTimeout(bustCache(url))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => {
        if (mountedRef.current) {
          if (d && d.length > 0) {
            setData(d);
          } else {
            // Fallback to static data if API returns empty
            import('../data/products.js').then(m => {
              if (mountedRef.current) {
                let cats = m.categories;
                if (brandId) cats = cats.filter(c => c.brandId === brandId);
                setData(cats);
              }
            });
          }
          setLoading(false);
        }
      })
      .catch(() => {
        import('../data/products.js').then(m => {
          if (mountedRef.current) {
            let cats = m.categories;
            if (brandId) cats = cats.filter(c => c.brandId === brandId);
            setData(cats);
            setLoading(false);
          }
        });
      });
  }, [brandId, version]);

  return { categories: data, loading };
}

// Fetch single category by brandId + slug
export function useCategory(brandId, slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(`${API}/categories/${brandId}/${slug}`))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => { if (mountedRef.current) { setData(d); setLoading(false); } })
      .catch(() => {
        import('../data/products.js').then(m => {
          if (mountedRef.current) {
            const cat = m.categories.find(c => c.brandId === brandId && c.slug === slug);
            setData(cat || null);
            setLoading(false);
          }
        });
      });
  }, [brandId, slug, version]);

  return { category: data, loading };
}

// Fetch single brand
export function useBrand(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(`${API}/brands/${id}`))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => { if (mountedRef.current) { setData(d); setLoading(false); } })
      .catch(() => {
        import('../data/products.js').then(m => {
          if (mountedRef.current) {
            setData(m.brands.find(b => b.id === id) || null);
            setLoading(false);
          }
        });
      });
  }, [id, version]);

  return { brand: data, loading };
}

// Fetch published blog posts
export function useBlogPosts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(`${API}/blog`))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => {
        if (mountedRef.current) {
          if (d && d.length > 0) {
            setData(d);
          } else {
            // Fallback to static data if API returns empty
            import('../data/blog.js').then(m => {
              if (mountedRef.current) {
                const allPosts = m.blogPosts || [];
                setData(allPosts.filter(p => p.is_published !== false));
              }
            });
          }
          setLoading(false);
        }
      })
      .catch(() => {
        import('../data/blog.js').then(m => {
          if (mountedRef.current) {
            const allPosts = m.blogPosts || [];
            setData(allPosts.filter(p => p.is_published !== false));
            setLoading(false);
          }
        });
      });
  }, [version]);

  return { posts: data, loading };
}

// Fetch single blog post by slug
export function useBlogPost(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const handler = () => setVersion(v => v + 1);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchWithTimeout(bustCache(`${API}/blog/slug/${slug}`))
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json(); })
      .then(d => {
        if (mountedRef.current) {
          if (d) {
            setData(d);
          } else {
            // Fallback to static data if API returns null/empty
            import('../data/blog.js').then(m => {
              if (mountedRef.current) {
                const posts = m.blogPosts || [];
                setData(posts.find(p => p.slug === slug) || null);
              }
            });
          }
          setLoading(false);
        }
      })
      .catch(() => {
        import('../data/blog.js').then(m => {
          if (mountedRef.current) {
            const posts = m.blogPosts || [];
            setData(posts.find(p => p.slug === slug) || null);
            setLoading(false);
          }
        });
      });
  }, [slug, version]);

  return { post: data, loading };
}