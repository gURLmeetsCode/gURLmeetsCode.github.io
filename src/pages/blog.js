import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Welcome, to my tech blog!</h1>
              <p>
                This is where I like to share my thoughts and learn new things.
                <br />
                If you are interested in my Medium content click this{' '}
                <a href="https://medium.com/@gURLmeetsCode">link</a>
                <br/><br/>
                <p>Here are some of the topics from my blog posts</p>
              </p>
            </header>
            <ul>
              {/* {posts.map(post => (
                <li>
                  <Link to={`/blog${post.fields.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </li>
              ))} */}
              <li>Reduce Vs For-Loop</li>
              <li>Noob-Tip: anchor tag scraping with Nokogiri</li>
              <li>Webpack 4 && React Loadable</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
        }
      }
    }
  }
`
