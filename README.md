# Personal Website

My personal site, deployed at [tse-jeff.github.io](https://tse-jeff.github.io/). It's always been a "learning to build my own website" project — it started as plain HTML/CSS/jQuery, and this version is a rewrite into a Create React App, mainly as a way to actually learn React by using it on something real instead of a tutorial.

It's a single-page site: a hero, a portfolio section pulling from a small list of real projects, an about section, and a way to get in touch.

## Content

The hero tagline, About Me text, and resume link are fetched at runtime from [custom-cms](https://github.com/tse-jeff/custom-cms), a small Cloudflare Worker + R2-backed admin tool. That means updating this content is a drag-and-drop upload instead of a commit + rebuild of this site — the hardcoded fallback text baked into the build only shows if that service is ever unreachable.

## Development

- `npm start` — run the dev server at `localhost:3000`.
- `npm run build` — production build to `build/`.

Deployment is automatic: a GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`.
