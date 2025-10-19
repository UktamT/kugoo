import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={108}
    height={44}
    viewBox="0 0 108 44"
    backgroundColor="#c9c9c9"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="108" height="44" /> 
    <rect x="110" y="129" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
)

export default MyLoader