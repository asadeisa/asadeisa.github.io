# Asad Eisa | Full-Stack Product Engineer

Personal portfolio for selected web, Android, and AI projects. Built with Nuxt 4, Vue, TypeScript, and CSS. The site is prerendered for GitHub Pages.

[Live portfolio](https://asadeisa.github.io/)

## Local development

Use Node.js 22 and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm generate
```

The static site is generated in `.output/public`. The GitHub Pages workflow publishes it when changes reach `main`.

## Content

Profile, experience, projects, and skills live in `app/content/`. The CV is served from `public/assets/files/asad-eisa.pdf`. The home page uses dark mode by default and remembers a visitor's theme choice in browser storage.