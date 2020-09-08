import React from "react"
import styled from "styled-components"

import data from "../components/data"

const Section = styled.div`
  font-size: 16px;
  margin-bottom: 0.5rem;
`

const Description = () => (
  <div>
    {data.description.map(item => (
      <Section key={item.split[0]}>{item}</Section>
    ))}
  </div>
)

export default Description
