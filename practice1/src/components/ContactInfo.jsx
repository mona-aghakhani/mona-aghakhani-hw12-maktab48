import React,{useState} from 'react'
import './ContactInfo.css'
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"
 const ContactInfo = ({contactInfo,onDelete,save,edit,editContact,update,onClose}) => {
  // const [selectedEdit, setSelectedEdit] = useState(false);
  const [show, setshow] = useState(false)
  // console.log(contactInfo);
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
            setshow(!contactInfo.id)}}
        />
        <FaWindowClose
        className="icon-contact"
        onClick={() => onDelete(contactInfo.id)}
      />
      </div>
      </div>
        // <div className="info-box">
        //     {contactInfo.name}
        // </div>
    )
}
export default ContactInfo;
{/* <div className="container-icon">
<BiEdit className="icon-contact" onClick={(event)=>{event.stopPropagation();edit(contact,contact.id,contact.url)
setSelectedEdit(contact.id)}} />
<AiFillSave
  className="icon-contact"
  onClick={()=>{save(contact,contact.id,contact.url)
    setSelectedEdit(!contact.id)}}
/>
<FaWindowClose
className="icon-contact"
onClick={() => onDelete(contact.id)}
/>
</div> */}
  // {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h5 className="input-info" >name:{contact.name}</h5>}  */} */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <h6  >tell:{contact.tell}</h6>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)}/>  : <p  >address:{contact.address}</p>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="email" name="email" value={editContact.email} onChange={(e)=>update(e)}/>  : <p  >email:{contact.email}</p>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <p  >name:{contact.name}</p>} 
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h5 className="input-info" >name:{contact.name}</h5>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <h6  >tell:{contact.tell}</h6>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)}/>  : <p  >address:{contact.address}</p>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="email" name="email" value={editContact.email} onChange={(e)=>update(e)}/>  : <p  >email:{contact.email}</p>}  */}
  //           {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <p  >name:{contact.name}</p>}  */}
  //             {/* name:<h2  >{contact.name} </h2> */}
  //             {/* tell:<h5>{contact.tell}</h5> */}
  //             {/* address:<p>{contact.address}</p> */}
  //             {/* email:<p>{contact.email}</p> */}
  //             {/* <button className="close-button" >ورود مجدد</button> */}
  //           {/* </div> */}
  //         {/* </div> */}
  //       {/* </div> */}