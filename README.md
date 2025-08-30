# 🎵 Artist Landing Page

A minimal, mobile-friendly landing page template for musicians and bands, built with [Hugo](https://gohugo.io/).  
This site acts as a central hub for your music, merch, tour dates, and social media links, similar to a "link-in-bio" page.  
You can also integrate a headless CMS (e.g. NetlifyCMS, TinaCMS, or Forestry) for easy content management without editing files manually.

<img src="https://github.com/al-matty/artist-landing-page/blob/main/example.png" alt="Preview" width="200"/>



## ✨ Features

- 📱 Mobile-first, minimal design  
- 🎶 Links to all major streaming platforms (Spotify, Apple Music, Amazon Music, Deezer, YouTube, etc.)  
- 🛍️ Merch & official store links  
- 📅 Upcoming shows / tour dates section  
- 📸 Social media buttons (Instagram, TikTok, Facebook, etc.)  
- ⚡ Powered by Hugo for speed and easy deployment  

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/artist-landing-page.git
cd artist-landing-page
```

### 2. Install Hugo & run locally
Follow the [official Hugo installation guide](https://gohugo.io/installation/).
```bash
hugo server
```
Visit [http://localhost:1313](http://localhost:1313) to see your landing page.

### 3. Configuration
Edit config.toml to customize:
* Artist/band name
* Streaming platform URLs
* Social media links
* Show dates and venues
* Store / merch links

Example config.toml:


```toml
baseURL = "https://yourband.github.io/"
languageCode = "en-us"
title = "Your Band Name"
theme = "artist-landing-page"

[params]
  artistName = "Your Band Name"
  showDate = "08/14/25"
  venue = "This Amazing Venue"

  [params.links]
    spotify = "https://open.spotify.com/yourband"
    appleMusic = "https://music.apple.com/yourband"
    amazonMusic = "https://music.amazon.com/yourband"
    deezer = "https://deezer.com/yourband"
    youtube = "https://youtube.com/yourband"
    store = "https://yourbandstore.com"
    instagram = "https://instagram.com/yourband"
    tiktok = "https://tiktok.com/@yourband"
    facebook = "https://facebook.com/yourband"
```

### 4. Deployment

You can host this Hugo site for free on:

* [GitHub Pages](https://docs.github.com/en/pages)
* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)

**Deploy to GitHub Pages**

Build your site:
```bash
hugo -t artist-landing-page -D
```
Push the contents of /public to your gh-pages branch.
