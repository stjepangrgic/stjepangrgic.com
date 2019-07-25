import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MyStoryPage = () => (
  <Layout>
    <SEO title="My story" />
    <h1>My Story</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MyStoryPage
