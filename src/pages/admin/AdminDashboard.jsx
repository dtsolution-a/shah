import { useEffect, useState } from 'react';
import { Package, Tag, ShoppingBag, FileText, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';
import api from './AdminAPI';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    brands: 0, categories: 0, products: 0, blogPosts: 0, unreadContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [brands, categories, products, blog, contacts] = await Promise.all([
        api.getBrands(),
        api.getCategories(),
        api.getProducts(),
        api.getBlogPosts(),
        api.getContacts(0) // unread only
      ]);
      setStats({
        brands: brands.length,
        categories: categories.length,
        products: products.length,
        blogPosts: blog.length,
        unreadContacts: contacts.length
      });
    } catch (err) {
      console.error('Failed to load stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    { label: 'Brands', value: stats.brands, icon: Package, color: 'bg-blue-500', href: '/admin/brands' },
    { label: 'Categories', value: stats.categories, icon: Tag, color: 'bg-purple-500', href: '/admin/categories' },
    { label: 'Products', value: stats.products, icon: ShoppingBag, color: 'bg-green-500', href: '/admin/products' },
    { label: 'Blog Posts', value: stats.blogPosts, icon: FileText, color: 'bg-orange-500', href: '/admin/blog' },
    { label: 'Unread Enquiries', value: stats.unreadContacts, icon: MessageSquare, color: 'bg-red-500', href: '/admin/contacts' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your website content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {cards.map(card => (
          <a
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
          >
            <div className={`w-10 h-10 rounded-lg ${card.color} bg-opacity-10 flex items-center justify-center mb-3`}>
              <card.icon className={`w-5 h-5 ${card.color.replace('bg-', 'text-')}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{card.label}</p>
          </a>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="/admin/brands" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <Package className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Add New Brand</span>
          </a>
          <a href="/admin/categories" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <Tag className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Add New Category</span>
          </a>
          <a href="/admin/products" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <ShoppingBag className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Add New Product</span>
          </a>
          <a href="/admin/blog" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <FileText className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Write Blog Post</span>
          </a>
          <a href="/admin/contacts" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <MessageSquare className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-gray-700">View Enquiries</span>
          </a>
          <a href="/" target="_blank" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors">
            <TrendingUp className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">View Live Website</span>
          </a>
        </div>
      </div>

      {/* Info */}
      {stats.unreadContacts > 0 && (
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-800">
              You have {stats.unreadContacts} unread enquiry{stats.unreadContacts > 1 ? 'ies' : 'y'}
            </p>
            <a href="/admin/contacts" className="text-sm text-amber-600 hover:underline mt-1 inline-block">
              View enquiries →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}