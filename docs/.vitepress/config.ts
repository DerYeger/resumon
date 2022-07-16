import { defineConfig } from 'vitepress'
import Meta from '../../package.json'

export default defineConfig({
  // site config
  lang: 'en-US',
  title: Meta.name,
  description: Meta.description,

  head: [
    ['meta', { property: 'og:title', content: Meta.name }],
    [
      'meta',
      {
        property: 'og:description',
        content: Meta.description,
      },
    ],
    ['meta', { property: 'og:url', content: Meta.homepage }],
    ['meta', { name: 'twitter:title', content: Meta.name }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: Meta.description,
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  // theme and its config
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/DerYeger/resumon/tree/master/docs/:path',
      text: 'Suggest changes to this page',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/DerYeger' },
      {
        icon: 'github',
        link: 'https://github.com/DerYeger/resumon',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT Jan Müller',
    },
  },
})
