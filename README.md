# Artist Landing Page

A minimal, mobile-friendly landing page template for musicians and bands, built with [Hugo](https://gohugo.io/).
This site acts as a central hub for your music, merch, tour dates, and social media links, similar to a "link-in-bio" page.

<img src="https://github.com/al-matty/artist-landing-page/blob/main/example.png" alt="Preview" width="200"/>

## Features

- Mobile-first responsive design (card layout on desktop)
- Hero section with background image, album artwork, and embedded YouTube video
- Links to all major streaming platforms with platform logos and pill-shaped buttons
- Upcoming shows / tour dates section
- EU-compliant cookie consent banner
- Powered by Hugo — no JavaScript frameworks, no npm

## Project Structure

```
config_example.toml   # Example site config (copy to config.toml)
data/                 # YAML data files for shows & links
  links_example.yaml  # Example links (copy to links.yaml)
  shows_example.yaml  # Example shows (copy to shows.yaml)
layouts/
  index.html          # Main page template
static/
  style.css           # All styles
  cookie.js           # Cookie consent banner logic
  images/             # Your images (gitignored)
    logos/             # Platform logo images (optional)
```

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/artist-landing-page.git
cd artist-landing-page
```

### 2. Set up configuration

Copy the example files and customize them:
```bash
cp config_example.toml config.toml
cp data/links_example.yaml data/links.yaml
cp data/shows_example.yaml data/shows.yaml
```

Edit `config.toml` with your details:
```toml
baseURL = "https://yourband.github.io/"
languageCode = "en-us"
title = "Your Band Name"

[params]
  artistName = "Your Band Name"
  announcement = "*New Single December 2023*"
  releaseTitle = "Album Title"
  youtubeID = "dQw4w9WgXcQ"
  artworkImage = "/images/artwork.jpg"
  backgroundImage = "/images/background.jpg"
  overlayColor = "#717A97"
  overlayOpacity = "0"
  cookieMoreInfoURL = "https://example.com/privacy"
```

### 3. Add your images

Place your images in `static/images/`:
- `artwork.jpg` — album cover (displayed at 240px, rounded corners)
- `background.jpg` — hero section background image

Optionally add platform logos to `static/images/logos/` and reference them in `data/links.yaml` via the `logo` field. If no logo is provided, the platform name is shown as text.

### 4. Install Hugo & run locally
Follow the [official Hugo installation guide](https://gohugo.io/installation/).
```bash
hugo server
```
Visit [http://localhost:1313](http://localhost:1313) to see your landing page.

### 5. Deployment

You can host this Hugo site for free on:

* [GitHub Pages](https://docs.github.com/en/pages)
* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)

**Deploy to GitHub Pages**

Build your site:
```bash
hugo -t artist-landing-page -D
```
Push the contents of `/public` to your gh-pages branch.

## Data Files

### links.yaml

Each link entry supports these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Platform display name (e.g., "Spotify") |
| `url` | Yes | Link URL |
| `type` | Yes | Button label text ("Play", "Watch", "Follow", "CDs & Merch", "Next Show") |
| `logo` | No | Path to logo image (e.g., "/images/logos/spotify.png") |
| `subtitle` | No | Text shown below the link (e.g., next show info) |

### shows.yaml

Each show entry has `date` and `venue` fields.
