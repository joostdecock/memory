import path from 'node:path'
import i18nConfig from './next-i18next.config.js'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import smartypants from 'remark-smartypants'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    format: 'mdx',
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      smartypants,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: { className: 'heading-autolink' },
        },
      ],
    ],
  },
}

const config = {
  pageExtensions: ['mjs'],
  i18n: i18nConfig.i18n,
  webpack: (config, options) => {

    // MDX support
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: mdxConfig.options,
        },
      ],
    })
    // Aliases make it easier to load imports
    config.resolve.alias.site = path.resolve(`./`)
    config.resolve.alias.mdx = path.resolve(`./mdx/`)
    config.resolve.alias.components = path.resolve(`./components/`)
    config.resolve.alias.hooks = path.resolve(`./hooks/`)

    return config
  },
}

export default config
