import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import banner from '../assets/images/banner.jpg'

const Awards = props => (
  <Layout>
    <Helmet>
      <title>gURLmeetsCode - Awards</title>
      <meta name="description" content="Awards Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Awards</h1>
          </header>
          <span className="image main">
            <img src={banner} alt="natasha headshot" />
          </span>
          <p></p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Awards
