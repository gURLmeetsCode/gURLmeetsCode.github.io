import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Natasha</h1>
      </header>
      <div className="content">
        <p>
          I'm Natasha Kelly and I am a Fullstack Software Engineer! Thank you
          for visiting my personal website. I am excited to share my love of
          technology with you.
        </p>
        <ul className="actions">
          <li>
            <a
              href="https://www.linkedin.com/in/natashakelly1/"
              name="linkedin"
              className="button next scrolly"
            >
              View LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
