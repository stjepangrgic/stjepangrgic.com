import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi </h1>
    <p>My name is Stjepan Grgic. I can describe myself as a designer because solving problems makes me happy. Above all, I am a curious human being exploring myself and the world through art and travel. This site houses my thoughts and ideas. It also showcases commercial and personal projects I worked on.</p>
    <Link to="/page-2/">My story</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
