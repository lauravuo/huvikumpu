import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageList from "../components/image-list"

const SecondPage = () => (
  <Layout>
    <SEO title="Kaikki kuvat" />
    <ImageList />
    <Link to="/">Takaisin etusivulle</Link>
  </Layout>
)

export default SecondPage
