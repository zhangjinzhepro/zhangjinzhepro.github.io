import { defineConfig } from 'vitepress'
import routers from "./router";
import router from "./router";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../dist",
  title: "云深",
  description: "",
  themeConfig: {
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo_.png',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: routers.nav,
    sidebar: router.sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunshenpro' }
    ]
  }
})
