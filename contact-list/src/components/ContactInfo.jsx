import React,{useState} from 'react'
import './ContactInfo.css'
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"
 const ContactInfo = ({contactInfo,onDelete,save,edit,editContact,update,onClose}) => {
  
  const [show, setshow] = useState(false)
  
    return (
        <div className="modal">
          <button className="close-btn" onClick={onClose}>x</button>
        {/* <div className="modal-content"> */}
          {/* <div className="modal-header"> */}
            {/* <div className="modal-body"> */}
            {/* <h5 className="input-info" >name:{contactInfo.name}</h5> */}
            {show ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h5 className="input-info" >name:{contactInfo.name}</h5>} 
            {show ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <h6  >tell:{contactInfo.tell}</h6>} 
            {show  ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)}/>  : <p  >address:{contactInfo.address}</p>} 
            {show ?<input className="edit-input" placeholder="email" name="email" value={editContact.email} onChange={(e)=>update(e)}/>  : <p  >email:{contactInfo.email}</p>} 
            <div className="container-icon">
        <BiEdit className="icon-contact" onClick={(event)=>{event.stopPropagation();edit(contactInfo)
        setshow(true)}} />
        <AiFillSave
          className="icon-contact"
          onClick={()=>{save(contactInfo,contactInfo.id,contactInfo.url)
            setshow(false)}}
        />
        <FaWindowClose
        className="icon-contact"
        onClick={() => onDelete(contactInfo.id)}
      />
      </div>
      </div>
       
    )
}
export default ContactInfo;
