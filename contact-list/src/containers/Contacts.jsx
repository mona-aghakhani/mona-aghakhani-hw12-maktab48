import React from 'react'

 const Contacts = ({contactList}) => {
  return (
    <div className="contact-container">
      <img className="img-card" src={contactList.url}  />
      <h3>{contactList.name}</h3>
      <p>{contactList.address}</p>
      <p>{contactList.tell}</p>
    </div>
  )
}
export default Contacts;






