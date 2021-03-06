import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import oldme from '../assets/images/oldme.jpg'
import pic02 from '../assets/images/pic07.jpg'
import gh from '../assets/images/gh.jpg'
import conf from '../assets/images/conf.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="gURLmeetsCode"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <Link
                aria-label="Link to About Me"
                to="/about-me"
                className="link primary"
              >
                <header className="major">
                  <h3>About me</h3>
                  <p>My journey into web development</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Landing Page"
                to="/blog"
                className="link primary"
              >
                <header className="major">
                  <h3>Tech Blog</h3>
                  <p>Read my latest blog posts</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Landing Page"
                to="/projects"
                className="link primary"
              >
                <header className="major">
                  <h3>Projects</h3>
                  <p>Check out my latest projects</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Landing Page"
                to="/awards"
                className="link primary"
              >
                <header className="major">
                  <h3>Awards</h3>
                  <p>Read about some of the recognition I have received</p>
                </header>
              </Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
