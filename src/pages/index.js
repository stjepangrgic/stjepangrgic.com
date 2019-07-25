import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Img from "../components/Img"
import SEO from "../components/seo"

const IndexPage = (props) =>  {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi </h1>
      <p>My name is Stjepan Grgic. I can describe myself as a designer because solving problems makes me happy. Above all, I am a curious human being exploring myself and the world through art and travel. This site houses my thoughts and ideas. It also showcases commercial and personal projects I worked on.</p>
      <Link to="/page-2/">My story</Link>
      <div>
        <Img fixed={props.data.featuredImage.childImageSharp.fixed} className="featured" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredImage: file(relativePath: {regex: "/stjepan-grgic-petra-amman-featured/"}) {
      childImageSharp {
        fixed(width: 1640, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
          originalName
        }
      }
    }
  }
`

export default IndexPage
