# Shield & Faith — Static Blog Site

**Faith, Family & the Frontline**

A modern, SEO-optimized static blog site for a law enforcement family blog. Pure HTML/CSS/JS — no frameworks, no build steps, no dependencies.

## 📁 File Structure

```
site/
├── index.html              # Homepage
├── about.html              # About page
├── article-template.html   # Blog post template (reusable)
├── categories.html         # All 6 categories with descriptions
├── logo.svg                # Shield + cross SVG logo
├── css/
│   └── style.css           # All styles (~20KB, no frameworks)
├── js/
│   └── main.js             # Mobile nav, newsletter UX, scroll animations
└── README.md               # This file
```

## 🎨 Design

- **Colors:** Navy (#1B2A4A), Gold (#D4A84B), White, Light Gray
- **Fonts:** Playfair Display (headings) + Inter (body) via Google Fonts
- **Features:** Mobile-first responsive, hamburger nav, sticky header, thin blue line accents, scroll-triggered fade-in animations
- **SEO:** Schema.org markup, Open Graph tags, Twitter Cards, semantic HTML5, canonical URLs

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository (e.g., `shieldandfaith.org`)
2. Push the contents of the `site/` folder to the repo root:
   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/shieldandfaith.org.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Set Source to **Deploy from a branch** → `main` → `/ (root)`
5. Add your custom domain: `shieldandfaith.org`
6. At your domain registrar, add:
   - **CNAME record:** `www` → `YOUR_USERNAME.github.io`
   - **A records** (for apex domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
7. Enable **Enforce HTTPS** in GitHub Pages settings
8. Create a `CNAME` file in the repo root with: `shieldandfaith.org`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub repo
4. Set:
   - **Build command:** _(leave blank — no build needed)_
   - **Publish directory:** `.` (or `site/` if you push the parent folder)
5. Click **Deploy**
6. Go to **Domain settings → Add custom domain**
7. Add `shieldandfaith.org` and follow DNS instructions
8. Netlify provides free SSL automatically

### Option 3: Cloudflare Pages (Free)

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click **"Create a project" → Connect to Git**
3. Select your repo
4. Set:
   - **Build command:** _(leave blank)_
   - **Build output directory:** `.` (or `site/`)
5. Click **Save and Deploy**
6. Go to **Custom domains** and add `shieldandfaith.org`
7. If using Cloudflare for DNS, it auto-configures; otherwise follow the CNAME instructions
8. SSL is automatic

## ✏️ How to Add New Blog Posts

1. **Copy** `article-template.html` and rename it (e.g., `best-boots-2026.html`)
2. **Update** the content:
   - Change the `<title>` tag
   - Update meta description, Open Graph tags, and canonical URL
   - Update the Schema.org JSON-LD (headline, dates, keywords)
   - Replace the article body content
   - Update breadcrumb navigation
   - Update related posts at the bottom
3. **Add** a card for the new post on `index.html` in the articles grid

## 📰 Newsletter Integration

The newsletter form uses a placeholder `action="#"`. To connect it:

- **Mailchimp:** Change `action` to your Mailchimp form URL and add their hidden fields
- **ConvertKit:** Replace the form with ConvertKit's embed code
- **Buttondown:** Change `action` to `https://buttondown.email/api/emails/embed-subscribe/YOUR_NAME`
- **Substack:** Link the subscribe button to your Substack page

## 💰 Affiliate Widgets

The article template includes placeholder spots for affiliate content in the sidebar. Replace the `.affiliate-placeholder` divs with:

- Amazon Associates product widgets
- Direct affiliate links with product images
- Ad network code (Mediavine, Ezoic, etc.)

## 🏷️ Categories

| Category | Anchor ID |
|---|---|
| Gear & Reviews | `#gear` |
| Marriage & Relationships | `#marriage` |
| Faith & Devotionals | `#faith` |
| Parenting | `#parenting` |
| Wellness & Mental Health | `#wellness` |
| Dog Life | `#dogs` |

Link to any category page section: `categories.html#gear`

## ⚡ Performance Notes

- No JavaScript frameworks — vanilla JS only (~3KB)
- Single CSS file — no CSS frameworks (~20KB)
- Google Fonts loaded with `font-display: swap` via default behavior
- SVG logo — no raster images to load
- No external dependencies beyond Google Fonts
- Lighthouse-ready: should score 90+ on all metrics out of the box

## 📄 License

This is a personal blog template. Customize freely for your own use.
