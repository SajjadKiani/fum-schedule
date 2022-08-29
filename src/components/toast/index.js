import React from 'react'
import {Toast} from 'react-bootstrap'

import './style.css'

export default function MyToast({messages , show , setShow}) {

  return (
    <div id='toast-container' className="position-fixed">
      {messages.map((d,i) => 
        <Toast show={show} key={i} bg='warning' onClose={() => {setShow(!show)}}>
          <Toast.Header></Toast.Header>
          <Toast.Body dir='rtl' className='d-flex justify-content-between'>
            {d}
          </Toast.Body>
        </Toast>
      )}
    </div>
  )
}
