# Tom Harlan, Math Tutor

A one-page static site for Tom's math tutoring. Plain HTML, CSS, and a little JavaScript. No build step.

```
index.html      the page
styles.css      all styling
script.js       loads the Calendly calendar and sets the copyright year
assets/         photo, favicon, and link preview image
.claude/skills/ Claude Code skills (not part of the website)
```

To preview locally, open `index.html` in a browser.

## Turn on GitHub Pages

1. Push this repo to GitHub.
2. Go to the repo's **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Pick the **main** branch and the **/ (root)** folder, then click **Save**.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Editing placeholders

Every piece of Tom-specific content is marked in `index.html` with an `<!-- EDIT: ... -->` comment. Search the file for `EDIT:` to find them all.

| What | Where |
| --- | --- |
| **Calendly link** | `index.html`, near the top: `<meta name="booking-url" content="https://calendly.com/PLACEHOLDER">`. Change that one line. The calendar embedded in the booking section reads it automatically. |
| Tom's name | Header wordmark, `<title>`, Open Graph and Twitter tags, footer |
| Page description | `<meta name="description">` and the `og:description` / `twitter:description` tags |
| Hero text | The `<h1>` and the paragraph under it |
| Photo | Replace `assets/tom-placeholder.svg` with a real photo (portrait, about 800x1000px). Update the `src` in the hero `<img>` if the filename changes, for example `assets/tom.jpg`. |
| Bio | The two paragraphs in the About section |
| Quick facts | The `<ul class="facts">` list in About |
| Location | The last sentence of the bio, and the meta description |
| Subjects and grade levels | The What I Teach section. Copy a whole `<div class="level">` block to add a group. |
| Testimonial | The testimonial section, just above booking. Copy a whole `<figure class="testimonial">` block to add more. |
| Email | Footer, both the `mailto:` link and the visible text |
| Link preview image | Replace `assets/og-image.png` (1200x630). It currently shows the placeholder name. |
| Site address | `og:url`, `og:image`, and `twitter:image` need the full live address, for example `https://YOUR-USERNAME.github.io/REPO-NAME/assets/og-image.png`. Link previews need absolute URLs. |

Until the real Calendly link is in, the booking section shows "Online booking is coming soon." instead of the calendar. (calendly.com/PLACEHOLDER is a real account belonging to someone else, so it is never embedded.)

## Custom domain

1. In **Settings > Pages > Custom domain**, enter your domain (for example `tomharlanmath.com`) and save. GitHub adds a `CNAME` file to the repo for you. You can also create it yourself: a file named `CNAME` in the root containing only the domain.
2. At your domain registrar, add these DNS records.

   For the root domain (`tomharlanmath.com`), four **A** records pointing to:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   For `www`, a **CNAME** record pointing to `YOUR-USERNAME.github.io`.

3. DNS can take up to a day to update. Once GitHub shows the domain as verified, check **Enforce HTTPS**.
4. Update the `og:url`, `og:image`, and `twitter:image` tags to use the new domain.

## Claude Code skills

Drop skills into `.claude/skills/`. For example, put the apple-design skill's `SKILL.md` in `.claude/skills/apple-design/`. Claude Code picks up skills from that folder automatically. GitHub Pages does not publish folders that start with a dot, so these files won't show up on the live site.
