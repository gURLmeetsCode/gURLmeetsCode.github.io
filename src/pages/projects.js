import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import gh from '../assets/images/gh.jpg'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>gURLmeetsCode - Projects</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Projects</h1>
          </header>
          <span className="image main">
            <img src={gh} alt="gh" />
          </span>
          <h2>Recent projects</h2>
          <p>Lorem put projects here</p>
          <h3>Capstone project</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oeeHZJ-goRg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Polly Pocket * Offline First - Microservice Web application that
            encourages productivity and habit building Built Progressive Web
            Application with React, Node, Express, Postgres and Google Oauth.
            Integrated NoSQL databases for offline functionality and caching.
            Successfully built and integrated a chrome extension that maintains
            the same functionality of the parent application.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Projects
