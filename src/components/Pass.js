import React from 'react'
import '../Pass.css';

function Pass(props) {
  return (
    <>
    
    <div onClick={props.onClose} className="backdrop"></div>
      <div className="pass">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Okay</button>
      </div>
    </>
  )
}

export default Pass