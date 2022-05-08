import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress'
import registerComponentsPlugin from '@vuepress/plugin-register-components'
import Meta from '../../package.json'
import * as path from 'path'

export default defineUserConfig({
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
  theme: defaultTheme({
    repo: Meta.repository.replace('github:', ''),
    docsBranch: 'master',
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
  }),

  bundler: viteBundler({
    viteOptions: {
      configFile: 'docs/vite.config.ts',
    },
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})
