import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import banner from '../assets/images/conf.jpg'

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
          <ul> 
            <li>
              Axios Emerging Leader program | Feb 2021 | Axios Media 
              <p>Program to ensure we turn in-house talent into the next generation of great managers and executives </p>
              <em>"Natasha is fearless in taking on responsibility, learning new skills, and collaborating across teams. She communicates empathetically and professionally, offering support and her experience from a service mindset. She has consistently demonstrated an amazing example of an Axion. Her focus is on the needs of the customer, coworkers, and company while balancing her own needs well. Natasha's ambition is not only to be a great technologist, but a great technology leader." - Axios Media colleague </em>
              <br/>
              <br/>
            </li>


            <li>AnitaB.org Women of Color in Technology Scholarship | Jun 2019 | AnitaB.org</li>
            <li>Woman Take Tech Scholarship | Jan 2017 | Birchbox 
              <p>Flatiron School has partnered with female-founded beauty subscription pioneer Birchbox to launch the Women Take Tech Initiative. The scholarship is part of the schools initiative to address tech’s gender gap.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Awards
