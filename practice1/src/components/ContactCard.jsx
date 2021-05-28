import React,{useState} from 'react'
import './ContactCard.css'
import {RiBookmark3Fill} from "react-icons/ri";
import ContactInfo from "./ContactInfo"
import { FaWindowClose } from "react-icons/fa";
// import user1 from "./user1.jpg"
// import user2 from "./user2.jpg"
// import user3 from "./user3.jpg"
// import user4 from "./user4.jpg"
// import user5 from "./user5.jpg"
// import user6 from "./user6.jpg"
// import user7 from "./user7.jpg"
// import user8 from "./user8.jpg"
// import user9 from "./user9.jpg"
// import user10 from "./user10.jpg"
 const ContactCard = ({contactInfo,selected,onClick,onDelete,onEdit,selectedEdit,showInput,handleShowInput}) => {
  //  const [show, setShow] = useState(true)
  //  console.log(show);
  return (
     
    <div className="card-container" onDoubleClick={()=>onClick(contactInfo.id)}>
        <RiBookmark3Fill className="star-icon" />
      <div><img className="img-card" src={contactInfo.url}  /></div>
      {selectedEdit === contactInfo.id ? <input/>  :  <h6 >{contactInfo.name}</h6>  }
      {/* {show ? <h6 >{contactInfo.name}</h6> : <input/>  } */}
      {/* {showInput ? <input/> : <h6>{contactInfo.name}</h6>} */}
      <p>{contactInfo.address}</p>
      <p>{contactInfo.tell}</p>
      <button onClick={()=>{onEdit(contactInfo.id)}}>edit</button>
      <FaWindowClose
        className="task__close"
        onClick={() => onDelete(contactInfo.id)}
      />
      {selected === contactInfo.id ? <ContactInfo contactInfo={contactInfo} onDelete={onDelete} /> : "" }
      {/* <ContactInfo className={`contact-info ${selected === contactInfo.id ? "active" : ""}`} contactInfo={contactInfo} /> */}
    </div>
    
  )
}
export default ContactCard;





// import React from 'react';
// import '../Contacts.css';
// const ContactCard = ({contact}) => {
	
// 	return(

// 	  	<div>
// 	        <div className="col-xs-4 col-sm-3">
	        
// 	            {contact.photo !== undefined ?  <img src={contact.photo} alt={contact.name} className="img-fluid rounded-circle" /> :
// 	            						 <img src="img/profile_img.png" alt ={contact.name} className="img-fluid rounded-circle" />}
	        	
// 	        </div>
// 	        <div className="col-xs-8 col-sm-9">
// 	            <span className="name">{contact.name + ' ' + contact.surname}</span><br/>
	            
// 	            <span className="fa fa-map-marker text-muted c-info" title={contact.address}></span>
// 	            <span className="visible-xs"> <span className="text-muted">{contact.address}</span><br/></span>
	            
// 	            <span className="fa fa-microphone text-muted c-info" title={contact.phone}></span>
// 	            <span className="visible-xs"> <span className="text-muted">{contact.phone}</span><br/></span>
	            
// 	            <span className="fa fa-comments text-muted c-info"title={contact.email}></span>
// 	            <span className="visible-xs"> <span className="text-muted">{contact.email}</span><br/></span>
// 	        </div>
// 	        <div className="clearfix"></div>
// 	      </div>
        
//     )
// }

// export default ContactCard;