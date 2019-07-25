import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Img from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) =>  {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi </h1>
      <p>My name is Stjepan Grgic. I can describe myself as a designer because solving problems makes me happy. Above all, I am a curious human being exploring myself and the world through art and travel. This site houses my thoughts and ideas. It also showcases commercial and personal projects I worked on.</p>
      <Link to="/my-story/">My story</Link>
      <div>
        <Img fluid={props.data.featuredImage.childImageSharp.fluid} className="featured" />
      </div>

      <h2>My work</h2>
      <p>Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed understanding of color, light, shapes.</p>
      <Link to="/work/">View all</Link>

      <h2>Personal projects</h2>
      <p>Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed.</p>

      <h2>Growth</h2>
      <p>Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed.</p>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredImage: file(relativePath: {regex: "/stjepan-grgic-petra-amman-featured/"}) {
      childImageSharp {
        fluid(maxWidth: 1640) {
          ...GatsbyImageSharpFluid_noBase64
          originalName
        }
      }
    }
  }
`

export default IndexPage
