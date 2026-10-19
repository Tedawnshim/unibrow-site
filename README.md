# unibrow.studio

The Unibrow Studio website. Built with [Astro](https://astro.build), hosted on Netlify.

## Run it on your computer

You need Node.js 22.22 or newer (`node -v` to check).

```
npm install      (once, and again whenever package.json changes)
npm run dev      (then open http://localhost:4321)
```

Changes to any file show up in the browser straight away. Stop it with Ctrl + C.

`npm run build` makes the finished site in `dist/`, the same way Netlify does. `npm run preview` serves that build at http://localhost:4321.

The contact form only works on Netlify. On your computer it shows, but cannot send.

## Where things are

| To change | Edit |
|---|---|
| Phone, email, address, Google rating, social links | `src/data/site.ts` |
| Team, client logos, packages, recognition, form options | `src/data/studio.ts` |
| A project | `src/content/projects/<name>.md` |
| A journal post | `src/content/journal/<name>.md` |
| Images for a project or post | `src/assets/projects/<name>/` or `src/assets/journal/<name>/` |
| Page layouts and words | `src/pages/` (one file per page) |
| Header, footer, contact form | `src/components/` |
| Colours, type, spacing | `src/styles/global.css` |
| Old WordPress addresses that now point elsewhere | `public/_redirects` |

### Add a project

1. Copy an existing file in `src/content/projects/` and rename it. The file name becomes the address: `my-film.md` → `/project/my-film/`.
2. Put its images in `src/assets/projects/my-film/`. JPG or PNG, up to about 2000 px wide; the site makes smaller copies itself.
3. Change the details at the top (title, client, line, format, year, summary, cover, facts). `line` is one of `films`, `social`, `design`, `web`, `originals`.
4. Write the story below the second `---`. `## ` starts a heading; `![description](../../assets/projects/my-film/still.jpg)` adds an image.
5. To embed a YouTube film: `<div class="yt" data-id="VIDEO_ID"><a href="https://www.youtube.com/watch?v=VIDEO_ID">Watch on YouTube</a></div>`
6. `featured: true` puts it on the home page (six at most); `order` sets its place in the list.

Journal posts work the same way in `src/content/journal/`, and live at `/<file-name>/`.

## Going live

See `BEFORE-LAUNCH.md`.
