import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

import "./content.css"

const H1 = styled.h1`
  font-weight: 600;
  font-family: 'Bitter', serif;
  font-size: 10vw;
`

const Content = () => {

  return (
    <div className='content'>
      <H1 className='info'>Howdy y'all, I'm Xian -- a full-stack developer and writer based in Baltimore, Maryland.</H1>
    </div>
  )
}

export default Content