import React from "react"
import styled from "styled-components"
import Obfuscate from "react-obfuscate"

import data from "../components/data"

const Header = styled.h3`
  padding: 0.5rem 0;
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  border-bottom: 1px solid #edf0f3;
  color: #56575f;
`

const Field = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    border-bottom: none;
    padding: 0.25rem 0;
  }
  border-bottom: 1px solid #edf0f3;
  position: relative;
  strong {
    background: white;
    padding-right: 0.25rem;
  }
  font-size: 16px;
  padding: 0.5rem 0;
  color: #56575f;
`

const FieldHeader = styled.span`
  flex: 0.3;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 21px;
    z-index: -1;
    width: 100%;
    height: 1px;
    @media only screen and (min-width: 600px) {
      border-bottom: 1px dotted darkslategray;
    }
  }
`

const FieldContent = styled.div`
  background: white;
  flex: 0.7;
  @media only screen and (min-width: 600px) {
    padding-left: 0.25rem;
  }
`

const getField = (name, fields) => {
  switch (name) {
    case "Sähköposti":
      return (
        <FieldContent>
          <Obfuscate email={fields[name]} />
        </FieldContent>
      )
    case "Puhelin":
      return (
        <FieldContent>
          <Obfuscate tel={fields[name]} />
        </FieldContent>
      )
    case "Whatsapp":
      return (
        <FieldContent>
          <Obfuscate href={`https://wa.me/${fields[name]}`}>
            Lähetä WA-viesti
          </Obfuscate>
        </FieldContent>
      )
    default:
      return <FieldContent>{fields[name]}</FieldContent>
  }
}

const FlatData = () => (
  <div>
    {data.sections.map(section => (
      <div key={section.name}>
        <Header>{section.name}</Header>
        {Object.keys(section.fields).map(field => (
          <Field key={field}>
            <FieldHeader>
              <strong>{field}</strong>
            </FieldHeader>
            {getField(field, section.fields)}
          </Field>
        ))}
      </div>
    ))}
  </div>
)

export default FlatData
