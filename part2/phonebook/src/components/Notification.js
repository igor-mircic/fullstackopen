import React from 'react'

export const Notification = ({ message }) => {
  if (message !== '') {
    return (
      <div className="message"> {message} </div>
    )
  } else {
    return (<></>)
  }
}
