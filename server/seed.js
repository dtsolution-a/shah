import db from './db.js';
import bcrypt from 'bcryptjs';

// Seed default admin
const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
if (!adminExists) {
  const hashed = bcrypt.hashSync('admin@123', 10);
  db.prepare('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)').run(
    'admin', 'admin@shahwebsite.com', hashed, 'admin'
  );
  console.log('✓ Default admin created: admin / admin@123');
}

// Seed brands from products.js data
import { brands, categories as catData } from '../src/data/products.js';

for (const brand of brands) {
  const existing = db.prepare('SELECT id FROM brands WHERE id = ?').get(brand.id);
  if (!existing) {
    db.prepare(`
      INSERT INTO brands (id, name, shortName, tagline, color, description, logo, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(brand.id, brand.name, brand.shortName, brand.tagline, brand.color, brand.description, brand.logo, 0);
    console.log(`✓ Brand seeded: ${brand.name}`);
  }
}

// Seed categories and products
for (const cat of catData) {
  const existingCat = db.prepare('SELECT id FROM categories WHERE id = ?').get(cat.id);
  if (!existingCat) {
    db.prepare(`
      INSERT INTO categories (id, brandId, name, slug, icon, description, heroImage, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(cat.id, cat.brandId, cat.name, cat.slug, cat.icon, cat.description, cat.heroImage || '', 0);
    console.log(`  ✓ Category seeded: ${cat.name}`);
  }

  // Seed products within this category
  if (cat.products) {
    for (const prod of cat.products) {
      const existingProd = db.prepare('SELECT id FROM products WHERE id = ?').get(prod.id);
      if (!existingProd) {
        db.prepare(`
          INSERT INTO products (id, categoryId, name, description, image, specs, sort_order)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(prod.id, cat.id, prod.name, prod.description, prod.image || '', JSON.stringify(prod.specs || []), 0);
      }
    }
    console.log(`    ✓ ${cat.products.length} products seeded for ${cat.name}`);
  }
}

// Seed blog posts from static data
import { blogPosts as blogData } from '../src/data/blog.js';

for (const post of blogData) {
  const existing = db.prepare('SELECT id FROM blog_posts WHERE slug = ?').get(post.slug);
  if (!existing) {
    db.prepare(`
      INSERT OR IGNORE INTO blog_posts (title, slug, excerpt, content, author, image, category, tags, is_published, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      post.title,
      post.slug,
      post.excerpt,
      post.content,
      post.author || 'Admin',
      post.cover || '',
      post.category || 'General',
      Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || ''),
      1,
      post.date || new Date().toISOString()
    );
    console.log(`  ✓ Blog seeded: ${post.title}`);
  }
}
const blogCount = db.prepare('SELECT COUNT(*) as cnt FROM blog_posts').get();
console.log(`  → ${blogCount.cnt} blog posts in database`);

console.log('\n✅ Database seeding complete!');
