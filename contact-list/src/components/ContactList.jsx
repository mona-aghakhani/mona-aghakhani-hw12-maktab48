import React from 'react'
import ContactCard from './ContactCard';
import './ContactCard.css'

 const ContactList = ({contacts,search,handleShow,editContact,editted,onDelete,update,edit,save}) => {
  const filterDatas = contacts.filter(person => person.name.toLocaleLowerCase().startsWith(search))

  
  return (
    <div className="parent-card">
   {filterDatas.map((contact,index)=>(
     <ContactCard  contact={contact} onClick={handleShow} edit={edit} editContact={editContact} update={update} save={save} editted={editted}  onDelete={onDelete} key={contact.id}  />
   
   ))}
      
    </div>
  )
}
export default ContactList;


