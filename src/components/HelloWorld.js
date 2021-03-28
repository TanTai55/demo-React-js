import { checkPropTypes } from 'prop-types'
import React from 'react'

function HelloWorld(props) {
  return (  
    <h1 className=" p-3 flex justify-between items-center">
      Hello {props.name}
    </h1>
  ) 
}
export default HelloWorld