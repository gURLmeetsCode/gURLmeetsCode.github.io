import React from 'react'
import { graphql } from 'gatsby'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1>My blog posts</h1>

      {posts.map(post => (
        <li>
          <a href="#">{post.frontmatter.title}</a>
        </li>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
