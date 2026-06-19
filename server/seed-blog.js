// Seed blog posts from static data into the database
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, 'shah_admin.db'));

import { blogPosts } from '../src/data/blog.js';

let seeded = 0;

for (const post of blogPosts) {
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
    seeded++;
    console.log(`✓ Seeded blog: ${post.title}`);
  }
}

console.log(`\n✅ Blog seeding complete! ${seeded} posts added.`);
const count = db.prepare('SELECT COUNT(*) as cnt FROM blog_posts').get();
console.log(`Total blog posts in DB: ${count.cnt}`);