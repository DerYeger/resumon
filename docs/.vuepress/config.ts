import { defineUserConfig, ViteBundlerOptions } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import Meta from '../../package.json'
import * as path from 'path'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
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

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: Meta.repository.replace('github:', ''),
    docsBranch: 'master',
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
  },

  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      configFile: 'docs/vite.config.ts',
    },
  },

  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
})
