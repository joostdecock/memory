# Memory

This is a work-in-progress website.

To run this project locally, you will need NodeJS and git.
Then run:

```
git clone git@github.com:Jeanismj/Memory.git memory
cd memory
npm install
npm run dev
```

Now open your browser at http://localhost:8000/ to see the site.

## Translation

This website is available in English and Mandarin. 
Translation is handled in two ways:

 - For various strings in the UI, we use `.yaml` files
 - For content, we use `.mdx` files (markdown)

### Translating YAML files

This is the list of translation files:

- `components/footer/footer.en.yaml`
- `components/header/header.en.yaml`
- `components/footer/locales.en.yaml`
- `components/footer/sections.en.yaml`
- `components/footer/themes.en.yaml`

For each of these, and equivalent `[namespace].cn.yaml` file must exist, and hold translated values.
For example, for `components/footer/footer.en.yaml` a `components/footer/footer.cn.yaml` file should also exist.

Note that a YAML file holds key/value pairs like this:

```yamnl
key: Hello
otherKey: Goodbye
```

You should only translate the values, as the key is used to look up the translation (and thus must be the same across languages).

The above example translated to Mandarin should look like this:

```yamnl
key: 你好
otherKey: 再见
```

### Translating MDX files

This is the list of content files:

- `mdx/about-jing.en.mdx`
- `mdx/testimonial-dee.en.mdx`
- `mdx/testimonial-emily.en.mdx`
- `mdx/testimonial-guillaume.en.mdx`
- `mdx/testimonial-miya.en.mdx`
- `mdx/testimonial-moon.en.mdx`
- `mdx/testimonial-searles.en.mdx`
- `mdx/testimonial-supanat.en.mdx`

For each of these, and equivalent `[namespace].cn.mdx` file must exist, and hold translated content.
For example, for `mdx/about-jing.en.mdx` a `mdx/about-jing.cn.mdx` file should also exist.

If you are not familiar with Markdown syntac, check [markdownguide.org](https://www.markdownguide.org/).

