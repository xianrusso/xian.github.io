import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "./header/header"
import Content from "./content/content"
import "./layout.css"

const Layout = ({ children, image }) => (
  <div class='container'>
    <Header />
    <Content />
    <Img fluid={image} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
