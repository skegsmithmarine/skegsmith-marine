# Skegsmith Marine website

A responsive, static website for GitHub Pages. It uses plain HTML, CSS and JavaScript and does not require a framework, build step, package installation or server-side runtime.

## Included

- `index.html` — Home page
- `about.html` — About Us page
- `contact.html` — Contact Us page
- `assets/css/styles.css` — responsive styling
- `assets/js/main.js` — mobile navigation, footer year and contact email hand-off
- `robots.txt` — crawler access rules and sitemap location
- `sitemap.xml` — XML sitemap
- `llms.txt` — concise business information for AI systems
- `404.html` — custom not-found page
- `assets/images/` — SVG brand mark, favicon and social sharing graphic

## Before publishing: set your GitHub Pages URL

The repository URL is not known yet. Replace every occurrence of:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/`

with the actual public GitHub Pages URL. Keep the trailing slash on the home-page URL. For example, if your GitHub username is `marineparts` and your repository is `skegsmith-marine`, the base URL would be `https://marineparts.github.io/skegsmith-marine/`.

This replacement must be made in:

- The canonical URL, Open Graph URL/image URL and JSON-LD in all three HTML pages
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

Use a text editor's Find and Replace All feature to do this in one operation. If you later connect a custom domain, replace the GitHub Pages URL with that domain everywhere, and add the domain's DNS records in GitHub Pages settings.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `skegsmith-marine`.
2. Upload the contents of this folder to the repository root. Do not upload the containing folder as an extra nested level. `index.html`, `robots.txt` and `sitemap.xml` should be at the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish, then open the URL displayed in the Pages settings.
7. Replace the URL placeholder throughout the files with the actual published URL and commit the changes.

## Contact form behaviour

The form validates the required fields in the browser, then opens the visitor's default email application with a message addressed to `info@skegsmithmarine.com`. It does not submit to a database or send messages in the background. A visitor must have an email app configured and press Send. For server-side form storage, spam protection or direct web submissions, connect a form service or add a backend endpoint before launch.

## SEO, GEO and AI discovery

- Each page has a unique title and meta description, canonical URL placeholder, social-sharing metadata and index/follow directives.
- The home page contains JSON-LD `LocalBusiness` structured data with the supplied phone, email, Missouri service area and product/service categories. No street address, hours, map coordinates, ratings or reviews have been fabricated.
- `robots.txt` allows crawlers and points to the XML sitemap.
- `sitemap.xml` lists the three main public pages.
- `llms.txt` gives AI systems a concise factual summary and explicitly avoids unverified business claims.
- GEO (generative engine optimization) is supported through clear entity naming, consistent contact details, Missouri location context, descriptive service copy and structured data. No file or markup can guarantee AI citations or search placement.

## Final publishing checklist

- [ ] Replace all `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY` URL placeholders.
- [ ] Confirm the business name spelling is **Skegsmith Marine**.
- [ ] Confirm phone and email are correct and monitored.
- [ ] Confirm the form opens the correct email app and test a message.
- [ ] Add a real business address, business hours, product brands and social links only after the business confirms them.
- [ ] After publishing, submit `sitemap.xml` in Google Search Console and validate the structured data.
