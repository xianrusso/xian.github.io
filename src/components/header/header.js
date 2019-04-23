import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import './header.css'

const SiteLogo = () => {
  return (
    <h1>
      <Link
        to='/'
        style={{
          color: `#313335`,
          textDecoration: `none`,
        }}
      >
        Xian
      </Link>
    </h1>
  )
}

const LinkItem = ({ page }) => {
  return(
    <li><Link to='/{page}' 
      style={{ 
        textDecoration: `none`, 
        color: `#313335`,
      }}
    >
      {page}
    </Link></li>
  )
}

const Header = () => (
  <header>
    <SiteLogo className='sitelogo'/>
    <nav>
      <ul role='navigation'>
        <LinkItem page='About' />
        <LinkItem page='Work' />
        <LinkItem page='Contact' />
      </ul> 
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header