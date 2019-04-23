import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Image = ({ data }) => {
  return (
    <Img fluid={data.file.childImageSharp.fluid}/>
  )
}

const query = graphql`
  query {
    file(relativePath: { ph: "photo.jpg" }) {
      childImageSharp {
        fluid(width: 125, height: 125) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Image