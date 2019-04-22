import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

const Li = styled.li`
  list-style-type: none;
`

const LinkItem = ({ page }) => {
  return(
    <Li><Link to='/{page}' 
      style={{ 
        textDecoration: `none`, 
        color: `#313335`,
        marginRight: `10px`, 
      }}
    >
      {page}
    </Link></Li>
  )
}

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      <SiteLogo 
        style={{
          marginRight: `auto`,
        }}
      />
      <ul
        style={{
          padding: 0,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `baseline`,
        }}
        role='navigation'
      >
        <LinkItem page='About' />
        <LinkItem page='Work' />
        <LinkItem page='Contact' />
      </ul> 
    </div>
  </header>
)

const StyledHeader = styled(Header)`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default StyledHeader
