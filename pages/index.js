import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkImages from '@fec/remark-responsive-images'
import path from 'path'

const mdx = `
# Don't swallow spaces in a srcset attribute
      
This is a minimal example to reproduce [mdx-js/mdx/issues/1607](https://github.com/mdx-js/mdx/issues/1607)

## The problem
This image is broken because there's no space between the different **srcset** entries.  
(We're using the **@fec/remark-responsive-images** remark plugin to add the various sizes)

This page uses **next-mdx-remote**, whereas [the /mdx page](/mdx) uses **@next/mdx-plugin**.  
They both show the same problem.

## The problematic image

![This is an image](/example.jpg "This is the image title")

## The code

[https://github.com/joostdecock/mdx-issue](https://github.com/joostdecock/mdx-issue)
`

const Page = props => <MDXRemote compiledSource={props.mdx.compiledSource} />

export const getStaticProps = async (context) => ({
  props: {
    mdx: (await serialize(mdx, {
      mdxOptions: {
        remarkPlugins: [
          [remarkImages, {
            srcDir: path.resolve('.', 'public'),
            targetDir: path.resolve('.', 'public'),
            blurredBackground: false,
            imageSizes: [500, 1000, 1500],
            resolutions: [1,2,3],
          }],
        ],
      },
    }))
  }
})

export default Page
