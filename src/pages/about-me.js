import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import banner from '../assets/images/banner.jpg'

const AboutMe = props => (
  <Layout>
    <Helmet>
      <title>gURLmeetsCode</title>
      <meta name="description" content="AboutMe Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Me</h1>
          </header>
          <span className="image main">
            <img src={banner} alt="natasha headshot" />
          </span>
          <p>
            My background is in Textiles and after graduation I moved to
            California where I had the opportunity to work for Facebook. While
            there I played a key role in the campus expansions across North and
            Latin America. I grew curious about technology and building
            websites. It was at this time, I decided to attend workshops and
            meetups to build on my knowledge and gage if this was something I
            could do full time. Shortly after, I moved back to NYC and started
            working for a non-profit and was responsible for maintaining their
            public facing website in addition to helping develop their
            e-commerce site. This experience is what prompted me to apply to
            Grace Hopper. Grace Hopper has now given me the skills and
            confidence to reach my professional goals. I am so excited to work
            on real world problems and learn more about how data can help make
            more informed decisions.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutMe
