import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about-me">
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/awards">
            Awards
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
