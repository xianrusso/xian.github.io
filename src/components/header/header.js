import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useCallback } from "react"
import { FaBars } from "react-icons/fa"

import './header.css'

const SiteLogo = () => {
  return (
    <h1>
      <Link
        to='/'
        style={{
          color: `#313335`,
          textDecoration: `none`,
          fontFamily: `East Sea Dokdo, cursive`,
          fontSize: `6vw`,
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


const Header = (props) => {

  function toggle() {
    const [isToggle, setBool] = useState(false);
    const setToggle = useCallback(() => setBool(v => !v), [])
    return {isToggle, setToggle};
  }

  return (
    <header>
      <SiteLogo className='sitelogo'/>
      <div className='nav-toggle'>
        <FaBars {...toggle}>
          {toggle()}
        </FaBars>
      </div>
      <nav className='nav'>
        <ul role='navigation'>
          <LinkItem page='About' />
          <LinkItem page='Work' />
          <LinkItem page='Contact' />
        </ul> 
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header