# Skegsmith Marine Website

A static, responsive website for Skegsmith Marine. It is prepared for GitHub Pages and the custom domain `skegsmithmarine.com`.

## Files

- `index.html` - Home page
- `about.html` - About Us page
- `contact.html` - Contact Us page
- `404.html` - Custom not-found page
- `assets/` - CSS, JavaScript, branding and images
- `robots.txt` - Crawler access guidance and sitemap location
- `sitemap.xml` - Public page URLs for search engines
- `llms.txt` - Business and page information for AI discovery tools
- `CNAME` - GitHub Pages custom domain (`skegsmithmarine.com`)

## Publish using GitHub Pages

1. Sign in to GitHub as `skegsmithmarine`.
2. Open the repository `skegsmith-marine`.
3. Upload the **contents** of this folder to the repository root (not the containing folder). If the older version is already uploaded, overwrite the matching files and add `CNAME`.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then save.
5. Under **Custom domain**, enter `skegsmithmarine.com` and save. The repository already includes the matching `CNAME` file.
6. Configure the DNS records at Namecheap as shown below.
7. After DNS verification and certificate provisioning complete, enable **Enforce HTTPS** in Settings → Pages.

## Namecheap DNS records

In Namecheap, open **Domain List → Manage** next to `skegsmithmarine.com` → **Advanced DNS** → **Host Records**. Add the following four A records:

| Type | Host | Value |
|---|---|---|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |

Add this CNAME record for `www`:

| Type | Host | Value |
|---|---|---|
| CNAME Record | `www` | `skegsmithmarine.github.io` |

Remove conflicting existing website A/AAAA/CNAME/URL Redirect records for `@` or `www` if they point elsewhere. Do **not** remove MX, TXT, SPF, DKIM or DMARC records used for email. If the domain uses custom nameservers rather than Namecheap BasicDNS/PremiumDNS/FreeDNS, create these records at the DNS provider those nameservers point to instead.

## Domain verification (recommended)

In GitHub account settings, open **Pages** and add `skegsmithmarine.com` under verified domains. GitHub will provide a unique TXT record. Add that exact TXT record in Namecheap Advanced DNS, wait for it to resolve, then click Verify in GitHub. Do not make up the TXT value.

If Google Search Console is used, it may provide another unique TXT verification record. Keep both verification TXT records.

## Final URLs

- Main site: https://skegsmithmarine.com/
- WWW: https://www.skegsmithmarine.com/ (should redirect to the primary domain after DNS and Pages configuration)
- Sitemap: https://skegsmithmarine.com/sitemap.xml
- Robots: https://skegsmithmarine.com/robots.txt
- LLMs overview: https://skegsmithmarine.com/llms.txt

## Important contact-form limitation

The contact form validates fields in the browser, then opens the visitor's default email application with a message addressed to `info@skegsmithmarine.com`. It does not submit to a database or send messages in the background. A visitor must have an email app configured and press Send. For direct web submissions and server-side spam protection, connect a form service or add a backend endpoint before launch.

## Before announcing the website

- [ ] Confirm Home, About Us and Contact Us work on desktop and mobile.
- [ ] Confirm all images and styles load.
- [ ] Test the phone and email links.
- [ ] Test the contact form hand-off.
- [ ] Confirm `https://skegsmithmarine.com/robots.txt`, `/sitemap.xml` and `/llms.txt` load.
- [ ] Enable Enforce HTTPS after GitHub makes it available.
- [ ] Add the domain to Google Search Console and submit `sitemap.xml`.

## Updating the website

Edit the relevant files locally, then upload the changed files to the `main` branch. GitHub Pages will publish the update automatically after its deployment completes.

## Sales inventory and internal detail pages

The homepage displays four featured outboard listings. Each “View full listing” link opens a detail page on the Skegsmith Marine domain:

- `listings/yamaha-150-2023.html`
- `listings/suzuki-250-2021.html`
- `listings/yamaha-200-2022.html`
- `listings/twin-suzuki-250-2019.html`

Each detail page provides a seller-supplied description, a specification table, a notice to verify current price/condition/availability, and an enquiry link to the Skegsmith Marine contact page. The contact form opens the visitor's email application; the visitor must send the prepared email.

## Inventory product photographs

The homepage cards and detail pages now use **real product/model photographs** instead of hand-drawn SVG motor illustrations. These are representative model images, not photographs of the exact used engines for sale. The source seller's four individual listings currently show “Photo coming soon” in their image area. The pages therefore clearly identify these photos as representative and advise customers to request actual unit photos before purchase.

Image credits and source pages:

- Yamaha 150 and 200 model images: [Yamaha Outboards](https://yamahaoutboards.com/outboards/350-150-hp/in-line-4)
- Suzuki DF250 model image: [Garant Boats](https://www.garantboats.eu/en/outboard-engine-suzuki-df250-txx)

The image files are currently loaded from their source hosts, not stored locally in this repository. For the exact units being sold, obtain current photos from the seller and upload them into `assets/images/products/`; then update the `src` values in `index.html` and the relevant files in `listings/`.
