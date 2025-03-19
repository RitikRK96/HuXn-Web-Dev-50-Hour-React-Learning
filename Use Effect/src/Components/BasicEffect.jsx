import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(()=>{
        console.log("BasicEffect Component Mounted")
    },[])
  return (
    <div>Check the Console to see the message</div>
  )
}

export default BasicEffect