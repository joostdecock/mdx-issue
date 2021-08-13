# Don't swallow spaces in a srcset attribute
      
This is a minimal example to reproduce [mdx-js/mdx/issues/1607](https://github.com/mdx-js/mdx/issues/1607)

## The problem
This image is broken because there's no space between the different **srcset** entries.  
(We're using the **@fec/remark-responsive-images** remark plugin to add the various sizes)

## Example

[https://mdx-issue.netlify.app/](https://mdx-issue.netlify.app/)


