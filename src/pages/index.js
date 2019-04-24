import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout image={data.bg.childImageSharp.fluid}></Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    bg: file(relativePath: { eq: "./photo.JPG" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
