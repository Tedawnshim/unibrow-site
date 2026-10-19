# Before launch

Started 19-10-2026. Tick things off as they're done. Anything in [brackets] on the site is still to be confirmed; search the project for `[` to find them all.

## Content still needed

- [ ] Josa Organic and Stone Wood: confirm they stay off the site (they redirect to /portfolio/ for now)
- [ ] One or two lines for each package: The Essentials, The Narrative, The Growth, Maintenance, Active Growth, Starter, Standard, Dominance, Websites, Digital marketing (`src/data/studio.ts`, `src/pages/index.astro`, `src/pages/services.astro`)
- [ ] Titles for Shim, Jackson and Ranju, and where each is based (`src/data/studio.ts`)
- [ ] About page: the line "[through good years and hard ones]" (`src/pages/about.astro`)
- [ ] New project pages: Meira Foods, Mom's, SELCO Foundation (images, a few lines each)
- [ ] Polo club website: two or three lines and screenshots (`src/content/projects/chingkhei-hunba-polo-club-website.md`)
- [ ] Film links (YouTube) for Perse, 10BedICU, Pragati, Mithun, Parkwest, so each page plays its film
- [ ] Years for 10BedICU, Pragati, Perse, Parkwest, Elysian Field, 3D Toy Design; the client for 3D Toy Design
- [ ] UFF 2021 special award winners
- [ ] Eartheners numbers for Solar Simplified: reach, period, source (add as `results:` in its file)
- [ ] Three real Google reviews, word for word, for a reviews section on the home page
- [ ] Budget ranges for the form (`budgetOptions` in `src/data/studio.ts`)
- [ ] Opening days and hours, as on the Google profile (`hours` in `src/data/site.ts`)
- [ ] The Google profile's own share link (`google.url` in `src/data/site.ts`)
- [ ] Are the two hiring posts still open? If not, mark them `draft: true` or add a "This role is filled" line
- [ ] A fresh showreel on YouTube, if the current one (pljCPFbGRMc) is old
- [ ] Privacy policy: review the draft, agree how long we keep enquiries

## Netlify

- [ ] Connect the GitHub repo; the build settings come from `netlify.toml`
- [ ] Forms → enable form detection; add an email notification to contact@unibrow.studio
- [ ] Send a test enquiry from the `.netlify.app` address

## Launch day

- [ ] Set `LAUNCHED = true` in `src/data/site.ts` (lets search engines in, turns on Google Analytics)
- [ ] In Netlify, add the domain unibrow.studio
- [ ] At Hostinger, change only the `@` A record and the `www` record to what Netlify shows. Leave the Zoho MX, SPF and DKIM records alone
- [ ] Wait for HTTPS to show as active in Netlify
- [ ] Check the old addresses redirect: /team/, /project/josa-organic-sanitary-pads/, /project/kelvin-cinema-festival-2024/
- [ ] Search Console: submit `https://unibrow.studio/sitemap-index.xml`, request indexing for the main pages
- [ ] GA4: mark `generate_lead` as a key event
- [ ] Google profile: check the website link
- [ ] Keep Bluehost for 3 months, then cancel
