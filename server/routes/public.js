import { Router } from 'express';
import db from '../db.js';

const router = Router();

// GET brands with category & product counts
router.get('/brands', (req, res) => {
  const brands = db.prepare('SELECT * FROM brands WHERE is_active = 1 ORDER BY sort_order ASC, name ASC').all();
  
  const result = brands.map(b => {
    const categories = db.prepare('SELECT * FROM categories WHERE brandId = ? AND is_active = 1 ORDER BY sort_order ASC, name ASC').all(b.id);
    const totalProducts = categories.reduce((sum, cat) => {
      const count = db.prepare('SELECT COUNT(*) as cnt FROM products WHERE categoryId = ? AND is_active = 1').get(cat.id);
      return sum + count.cnt;
    }, 0);
    return {
      ...b,
      categoryCount: categories.length,
      productCount: totalProducts,
    };
  });
  res.json(result);
});

// GET categories (optionally by brandId)
router.get('/categories', (req, res) => {
  const { brandId } = req.query;
  let categories;
  if (brandId) {
    categories = db.prepare('SELECT * FROM categories WHERE brandId = ? AND is_active = 1 ORDER BY sort_order ASC, name ASC').all(brandId);
  } else {
    categories = db.prepare('SELECT * FROM categories WHERE is_active = 1 ORDER BY sort_order ASC, name ASC').all();
  }

  // Attach products to each category
  const result = categories.map(cat => {
    const products = db.prepare('SELECT * FROM products WHERE categoryId = ? AND is_active = 1 ORDER BY sort_order ASC, name ASC').all(cat.id);
    return {
      ...cat,
      products: products.map(p => ({
        ...p,
        specs: p.specs ? JSON.parse(p.specs) : []
      }))
    };
  });
  res.json(result);
});

// GET single category by slug and brandId
router.get('/categories/:brandId/:slug', (req, res) => {
  const cat = db.prepare('SELECT * FROM categories WHERE brandId = ? AND slug = ? AND is_active = 1').get(req.params.brandId, req.params.slug);
  if (!cat) return res.status(404).json({ error: 'Category not found' });

  const products = db.prepare('SELECT * FROM products WHERE categoryId = ? AND is_active = 1 ORDER BY sort_order ASC, name ASC').all(cat.id);
  cat.products = products.map(p => ({
    ...p,
    specs: p.specs ? JSON.parse(p.specs) : []
  }));
  res.json(cat);
});

// GET single brand by id
router.get('/brands/:id', (req, res) => {
  const brand = db.prepare('SELECT * FROM brands WHERE id = ? AND is_active = 1').get(req.params.id);
  if (!brand) return res.status(404).json({ error: 'Brand not found' });
  res.json(brand);
});

// GET all products (optionally by categoryId)
router.get('/products', (req, res) => {
  const { categoryId } = req.query;
  let products;
  if (categoryId) {
    products = db.prepare('SELECT * FROM products WHERE categoryId = ? AND is_active = 1 ORDER BY sort_order ASC, name ASC').all(categoryId);
  } else {
    products = db.prepare('SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order ASC, name ASC').all();
  }
  products = products.map(p => ({
    ...p,
    specs: p.specs ? JSON.parse(p.specs) : []
  }));
  res.json(products);
});

// GET single product
router.get('/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ? AND is_active = 1').get(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  product.specs = product.specs ? JSON.parse(product.specs) : [];
  res.json(product);
});

// GET all blog posts (published only)
router.get('/blog', (req, res) => {
  const posts = db.prepare("SELECT * FROM blog_posts WHERE is_published = 1 ORDER BY created_at DESC").all();
  res.json(posts);
});

// GET single blog post by slug
router.get('/blog/slug/:slug', (req, res) => {
  const post = db.prepare("SELECT * FROM blog_posts WHERE slug = ? AND is_published = 1").get(req.params.slug);
  if (!post) return res.status(404).json({ error: 'Blog post not found' });
  res.json(post);
});


// GET testimonials by page (home or career)
router.get('/testimonials', (req, res) => {
  const { page } = req.query;
  let query = 'SELECT * FROM testimonials WHERE is_active = 1';
  const params = [];
  if (page) { query += ' AND page = ?'; params.push(page); }
  query += ' ORDER BY sort_order ASC, created_at DESC';
  res.json(db.prepare(query).all(...params));
});

// GET active career jobs (public)
router.get('/jobs', (req, res) => {
  const jobs = db.prepare('SELECT * FROM career_jobs WHERE is_active = 1 ORDER BY sort_order ASC, created_at DESC').all();
  res.json(jobs);
});
export default router;
