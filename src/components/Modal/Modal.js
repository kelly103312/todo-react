import React from 'react'
import ReactDOM from 'react-dom/client';
import PortalReactDOM from 'react-dom'
import './Modal.css'

export const Modal = ({children}) => {
  return PortalReactDOM.createPortal(
    
        <div className='modal'>
            {children}
        </div>
        ,
        document.getElementById("modal")

    )
  
}