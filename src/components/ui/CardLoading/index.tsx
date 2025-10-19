import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={284}
    height={534}
    viewBox="0 0 284 534"
    backgroundColor="#c9c9c9"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="0" y="266" rx="5" ry="5" width="149" height="33" /> 
    <rect x="0" y="317" rx="5" ry="5" width="55" height="20" /> 
    <rect x="0" y="347" rx="5" ry="5" width="55" height="20" /> 
    <rect x="74" y="347" rx="5" ry="5" width="55" height="20" /> 
    <circle cx="127" cy="407" r="14" /> 
    <rect x="1" y="456" rx="5" ry="5" width="259" height="38" /> 
    <rect x="110" y="129" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="398" rx="5" ry="5" width="86" height="23" /> 
    <rect x="74" y="317" rx="5" ry="5" width="55" height="20" /> 
    <circle cx="174" cy="407" r="14" /> 
    <rect x="1" y="3" rx="10" ry="10" width="283" height="251" />
  </ContentLoader>
)

export default MyLoader