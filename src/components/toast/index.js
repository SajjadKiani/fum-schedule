import React from 'react'
import {Toast} from 'react-bootstrap'

import './style.css'

export default function MyToast({message , show , setShow}) {

  return (
    <div id='toast-container' className="position-fixed">
      <Toast show={show} bg='warning' onClose={() => {setShow(!show)}}>
        <Toast.Header></Toast.Header>
        <Toast.Body dir='rtl' className='d-flex justify-content-between'>
          {message}
        </Toast.Body>
    </Toast>
    </div>
  )
}
