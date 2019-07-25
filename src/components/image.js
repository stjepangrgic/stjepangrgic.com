import React from "react"
import GatsbyImage from "gatsby-image"

// const Img = ({ alt, ...other }) => {
const Img = (props) => {
  const { alt, ...other } = props

  console.log(props)
  // get image object from passed prop
  const d = props.fixed ? props.fixed : props.fluid
  let clsNm = "img"
  if (props.className) clsNm = `img ${props.className}`
  const clean = (text) =>
    text
      .split("-")
      .join(" ")
      .slice(0, -4)

  return (
    <GatsbyImage
      {...other}
      alt={alt ? alt : clean(d.originalName)}
      className={clsNm}
    />
  )
}

export default Img
