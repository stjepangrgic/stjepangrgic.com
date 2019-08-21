import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Img from "../components/image"
import SEO from "../components/seo"

// Images
import deskIllustration from "../images/desk-illustration.svg"
import paperPlaneIllustration from "../images/paperplane-illustration.svg"

const IndexPage = (props) =>  {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <p><b>Hi, my name is Stjepan.</b> I am a curious human being exploring myself and the world through art and travel. By challenging myself to draw, <Link to="#">take photos</Link>, <Link>read</Link>, do something different every day I am trying to grow as a person. If you're curious, read <Link>my story</Link> or find out what I am doing <Link>now</Link>.</p>
      <img src={paperPlaneIllustration} alt="Paperplane illustration"/>
      <p><b>I am also a digital product designer</b> with over six years of experience working in both startups and advertising agencies.  I’ve been fortunate enough to work with great companies and even greater people. I shaped products and helped companies grow. If you wonder how that looks like, check out <Link>my work</Link> or read my <Link>resume</Link>.</p>
      <img src={deskIllustration} alt="Desk illustration"/>

      {/*<Img fluid={props.data.featuredImage.childImageSharp.fluid} className="featured" />*/}
      
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
