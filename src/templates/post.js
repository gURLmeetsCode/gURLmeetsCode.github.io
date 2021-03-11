import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Post({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
              <small>{post.frontmatter.date}</small>
            </header>
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
