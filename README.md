# Africa Digital Innovation Lab (ADIL), Website

The official website of the **Africa Digital Innovation Lab (ADIL)** at **African Leadership University (ALU), Rwanda Campus**, BSE Software Engineering, Kigali Innovation City, Bumbogo, Kigali.

A static, dependency-free academic research-group website designed for **GitHub Pages**, white background, black text, black navigation bar, bold masthead, and an auto-sliding photo strip. No build step, no framework: HTML + CSS + a small amount of vanilla JavaScript.

---

## Quick start (view locally)

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push these files to the `main` branch of your repository
   (`https://github.com/jturatsinzealu/Africa-Digital-Innovation-Lab`):
   ```bash
   git add .
   git commit -m "Redesigned ADIL website"
   git push
   ```
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / (root) → Save**.
3. Live at: `https://jturatsinzealu.github.io/Africa-Digital-Innovation-Lab/`

`.nojekyll` is included; all paths are relative, so the site works at the project URL or a custom domain with no changes.

---

## Editing the site, where everything lives

**Routine content updates never require touching HTML.** All content is in plain JavaScript data files:

| File | Controls |
|---|---|
| `data/site.js` | Lab name, tagline, university, address, **email**, logo path, navigation, footer |
| `data/slides.js` | **Home photo slider**, image paths, alt text, captions |
| `data/research.js` | Research themes (Research page + Home featured cards) |
| `data/projects.js` | All projects, `status`: `"current"` / `"proposed"` / `"completed"`; `featured: true` shows on Home |
| `data/people.js` | Everyone on the People page, grouped by role |
| `data/publications.js` | Publications & datasets, grouped by year |
| `data/news.js` | News entries (newest first; top 3 appear on Home) |
| `data/partners.js` | Partner groups **and the partner disclaimer text** |
| `data/join.js` | Join Us opportunity tracks |

Styling lives in `assets/css/style.css` (all colors are variables at the top). Header, footer, slider, and rendering logic live in `assets/js/main.js`.

### The photo slider (Home)

The strip under the headline auto-advances every 5 seconds, pauses on hover, has arrows and dots, and respects reduced-motion settings. To use real photos:

1. Add photos to `assets/img/slides/`, recommended ~1600×700 JPG (landscape).
2. Update the paths and captions in `data/slides.js`.
3. Delete the placeholder SVGs when no longer needed.

Add or remove slides freely, the slider adapts to however many entries `data/slides.js` contains.

### Adding a person with a photo
Put the image in `assets/img/` (square, ≥600×600 recommended) and set `photo: "assets/img/yourfile.jpg"` in `data/people.js`. When `photo` is `null`, a neutral placeholder is shown.

### Replacing placeholders
Placeholder entries are clearly marked, e.g. `[Researcher Profile, Information to be added]`. Search the `data/` folder for `[` to find everything awaiting real information.

---

## Branding

- The official **ALU logo** is included at `assets/img/alu-logo.png` and appears in the black navigation bar (on a white chip) and the home masthead. To swap it, replace that file or change `logo` in `data/site.js`.
- Accent red `--red: #d0202e` in `assets/css/style.css` is sampled from the ALU logo; institutional blue `--blue: #1a3f7a` is used for sub-headings.
- **Check the contact email**: the site currently uses `jturatsinze@alueducation.cn` exactly as provided. ALU addresses are normally `@alueducation.com`, if `.cn` is a typo, fix it in one place: `data/site.js`.

## Information still to be supplied

- Real lab photos for the home slider (`assets/img/slides/` + `data/slides.js`)
- Founding director's name, bio, and photo (`data/people.js`)
- Faculty, student, and collaborator profiles (`data/people.js`)
- Real news dates and announcements (`data/news.js`)
- First publications/datasets when released (`data/publications.js`)
- Confirmed partners, flip `confirmed: true` in `data/partners.js` **only after an agreement is formalised** (the Partners page carries a clear "prospective partners" disclaimer)
- A map embed on the Contact page

## License

Content © Africa Digital Innovation Lab (ADIL), African Leadership University. Code may be reused within ALU freely; add an explicit license file if you intend wider reuse.
