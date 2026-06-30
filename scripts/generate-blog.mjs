import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { posts } from "./blog-posts-data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const blogDir = resolve(root, "blog");
const postsDir = resolve(blogDir, "posts");
const dataDir = resolve(blogDir, "data");

const SITE = "https://n1kodev.com";

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function blogNav(depth = 1) {
  const blogIndex = depth === 2 ? "../index.html" : "index.html";
  const site = depth === 2 ? "../../index.html" : "../index.html";
  return `<nav class="blog-nav">
  <div class="blog-nav-inner">
    <a href="${blogIndex}" class="blog-nav-brand"><span class="n1-accent">N1</span>kodev</a>
    <ul class="blog-nav-links">
      <li><a href="${site}">მთავარი საიტი</a></li>
      <li><a href="${site}#services">სერვისები</a></li>
      <li><a href="${site}#contact">კონტაქტი</a></li>
    </ul>
  </div>
</nav>`;
}

function headMeta({ title, description, url, type = "article", depth = 0 }) {
  const p = depth === 0 ? "" : "../".repeat(depth);
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)} | N1kodev ბლოგი</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="Georgian" />
  <meta name="content-language" content="ka" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="ka" href="${url}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image" content="${SITE}/images/N1kodevv-logo.png" />
  <meta property="og:type" content="${type}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:locale" content="ka_GE" />
  <meta property="og:site_name" content="N1kodev" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <link rel="icon" type="image/png" href="${p}images/logo-no-bg.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Georgian:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${p}style.css" />
  <link rel="stylesheet" href="${p}premium.css" />
  <link rel="stylesheet" href="${p}blog.css" />`;
}

function articleJsonLd(post) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": ${JSON.stringify(post.title)},
  "description": ${JSON.stringify(post.excerpt)},
  "datePublished": ${JSON.stringify(post.date)},
  "dateModified": ${JSON.stringify(post.date)},
  "author": { "@type": "Organization", "name": "N1kodev", "url": "${SITE}" },
  "publisher": {
    "@type": "Organization",
    "name": "N1kodev",
    "logo": { "@type": "ImageObject", "url": "${SITE}/images/N1kodevv-logo.png" }
  },
  "inLanguage": "ka",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "${SITE}/blog/posts/${post.slug}.html" }
}
</script>`;
}

function generatePostPage(post) {
  const url = `${SITE}/blog/posts/${post.slug}.html`;
  const body = post.paragraphs.map((p) => `        <p>${esc(p)}</p>`).join("\n");

  return `<!doctype html>
<html lang="ka">
<head>
  ${headMeta({ title: post.title, description: post.excerpt, url, depth: 2 })}
  ${articleJsonLd(post)}
</head>
<body class="blog-page">
  ${blogNav(2)}
  <article class="blog-post" style="padding-top: 5rem;">
    <a href="../index.html" class="blog-back"><i class="fas fa-arrow-left"></i> ყველა სტატია</a>
    <header class="blog-post-header">
      <div class="blog-post-category">${esc(post.category)}</div>
      <h1 class="blog-post-title">${esc(post.title)}</h1>
      <div class="blog-post-meta">${post.date} · N1kodev</div>
    </header>
    <div class="blog-post-content">
${body}
    </div>
    <div class="blog-cta">
      <h3>გჭირდებათ პროფესიონალური დახმარება?</h3>
      <p>N1kodev გთავაზობთ ვებსაიტებს, SEO-ს, AI ვიდეოს და ციფრულ მარკეტინგს.</p>
      <a href="../../index.html#contact" class="btn btn-primary">უფასო კონსულტაცია</a>
    </div>
  </article>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</body>
</html>`;
}

function generateIndexPage(sortedPosts) {
  const categories = [...new Set(sortedPosts.map((p) => p.category))];
  const cards = sortedPosts
    .map(
      (p) => `      <article class="blog-card" data-category="${esc(p.category)}">
        <div class="blog-card-body">
          <div class="blog-card-category">${esc(p.category)}</div>
          <h2 class="blog-card-title"><a href="posts/${p.slug}.html">${esc(p.title)}</a></h2>
          <p class="blog-card-excerpt">${esc(p.excerpt)}</p>
          <div class="blog-card-meta">${p.date}</div>
        </div>
      </article>`
    )
    .join("\n");

  const filterBtns = categories
    .map(
      (c) =>
        `    <button class="blog-filter-btn" data-filter="${esc(c)}">${esc(c)}</button>`
    )
    .join("\n");

  const url = `${SITE}/blog/`;

  return `<!doctype html>
<html lang="ka">
<head>
  ${headMeta({
    title: "ბლოგი — ციფრული მარკეტინგი, SEO და ვებ დეველოპმენტი",
    description:
      "50+ სტატია ვებ დეველოპმენტზე, SEO-ზე, AI ვიდეო მარკეტინგზე და ბრენდ პოზიციონირებაზე საქართველოს ბიზნესებისთვის.",
    url,
    type: "website",
    depth: 1,
  })}
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "N1kodev ბლოგი",
  "description": "ციფრული მარკეტინგისა და ვებ დეველოპმენტის ბლოგი საქართველოში",
  "url": "${url}",
  "inLanguage": "ka",
  "publisher": { "@type": "Organization", "name": "N1kodev", "url": "${SITE}" }
}
</script>
</head>
<body class="blog-page">
  ${blogNav(1)}
  <header class="blog-hero" style="padding-top: 5rem;">
    <h1>N1kodev ბლოგი</h1>
    <p>ციფრული მარკეტინგი, ვებ დეველოპმენტი, SEO და AI ვიდეო — პრაქტიკული რჩევები ქართული ბიზნესებისთვის</p>
  </header>
  <div class="blog-container">
    <div class="blog-filters">
      <button class="blog-filter-btn active" data-filter="all">ყველა</button>
${filterBtns}
    </div>
    <div class="blog-grid" id="blog-grid">
${cards}
    </div>
  </div>
  <script>
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        document.querySelectorAll('.blog-card').forEach(card => {
          card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
        });
      });
    });
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</body>
</html>`;
}

function generateSitemap(sortedPosts) {
  const today = new Date().toISOString().split("T")[0];
  const urls = [
    { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${SITE}/blog/`, priority: "0.9", changefreq: "weekly" },
    ...sortedPosts.map((p) => ({
      loc: `${SITE}/blog/posts/${p.slug}.html`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: p.date,
    })),
  ];

  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod || today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

// --- main ---
mkdirSync(postsDir, { recursive: true });
mkdirSync(dataDir, { recursive: true });

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

writeFileSync(resolve(dataDir, "posts.json"), JSON.stringify(sorted, null, 2), "utf8");

for (const post of sorted) {
  writeFileSync(resolve(postsDir, `${post.slug}.html`), generatePostPage(post), "utf8");
}

writeFileSync(resolve(blogDir, "index.html"), generateIndexPage(sorted), "utf8");
writeFileSync(resolve(root, "sitemap.xml"), generateSitemap(sorted), "utf8");

console.log(`Generated ${sorted.length} blog posts + index + sitemap`);
