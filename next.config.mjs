import path from 'node:path'
import i18nConfig from './next-i18next.config.js'

const config = {
  pageExtensions: ['mjs'],
  i18n: i18nConfig.i18n,
  webpack: (config, options) => {

    // Aliases make it easier to load imports
    config.resolve.alias.site = path.resolve(`./`)
    config.resolve.alias.components = path.resolve(`./components/`)
    config.resolve.alias.hooks = path.resolve(`./hooks/`)

    return config
  },
}

export default config
