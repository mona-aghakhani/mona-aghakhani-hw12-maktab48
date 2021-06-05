import React,{useEffect, useState} from 'react'
import './ContactCard.css'
import {RiBookmark3Fill} from "react-icons/ri";
import ContactInfo from "./ContactInfo"
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"
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
 const ContactCard = ({contact,selected,onClick,edit,editContact,save,update,onDelete,editted,onEdit,showInput,handleShowInput}) => {
  //  const [show, setShow] = useState(true)
  //  console.log(show);
  // console.log(contact);
  const [word, setWord] = useState("")
  const [showMsg, setShowMsg] = useState(false)
  const [selectedEdit, setSelectedEdit] = useState(false);


  // useEffect((preveditContact) => {
  //   if ((editContact && editContact.id===contact.id) ){setWord(`editted`)}
    
  // }, [contact])
  useEffect(() => {
    setWord(`editted`)
    
  }, [contact])
  // useEffect(() => {
  //   if (editContact ) {
     
  //     setShowMsg(preveditContact =>preveditContact !== contact ? true :false)
  //   }
    
  //   // setIndex(index =>index+1)
  //   // setWord(`editted`)
  // }, [editContact])
  // console.log(editContact);
  // console.log(contact);
  return (
     
    <div className="card-container" onDoubleClick={()=>onClick(contact,contact.id)}>
        <RiBookmark3Fill className="star-icon" />
      <div><img className="img-card" src={contact.url}  /></div>
      {(editContact && editContact.id===contact.id) ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h6  >{contact.name}</h6>} 
      {(editContact && editContact.id===contact.id) ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)} />  : <p  >{contact.address}</p>} 
   {(editContact && editContact.id===contact.id) ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <p  >{contact.tell}</p>} 
     
      <BiEdit onClick={(event)=>{event.stopPropagation();edit(contact)
      setSelectedEdit(contact.id)}} />
         <AiFillSave
          className="task__close"
          onClick={(event)=>{event.stopPropagation();save(contact,contact.id,contact.url)
           }}
        />
      <FaWindowClose
        className="task__close"
        onClick={() => onDelete(contact.id)}
      />
      {/* {(editContact && editContact.id===contact.id) && <p>{word}</p>} */}
      {/* {(selectedEdit === contact.id  && editted) ? <p>{word}</p> : ""}  */}
      {(selectedEdit === contact.id  && editted) ? <p className="editted">{word}</p> : ""} 
      {/* {showMsg && <p>editted</p> }  */}
      {/* {selected && <ContactInfo contactInfo={contact} onDelete={onDelete} />  } */}
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


//   {/* <p>{word}</p> */}
//   {filterDatas.map((contact,index)=>(
//     <div className="card-container" onClick={()=>handleShow(contact.id)}>
//     <RiBookmark3Fill className="star-icon" />
//   <div><img className="img-card" src={contact.url}  /></div>
//   {/* {showInput ? <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  :  <h6 >{contact.name}</h6>  } */}
//   {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h6  >{contact.name}</h6>} 
//   {selectedEdit === contact.id ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)} />  : <p  >{contact.address}</p>} 
//   {selectedEdit === contact.id ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <p  >{contact.tell}</p>} 
//  {(selectedEdit === contact.id  && editted) ? <p>{word}</p> : ""} 
//  {/* {(selectedEdit === contact.id  || chek) ? <p>editted</p> : ""}  */}
//  {/* {chek && <p>editted</p> }  */}
//  {/* <h2>{word}</h2> */}
//   {/* {ShowEditted && <p>editted</p>} */}
//   {/* {toggleShow && <h6 onClick={toggleShow} >{contact.name}</h6>} */}
//   {/* {toggleShow &&  <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>} */}
//   {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  :  <h6 >{contact.name}</h6>  } */}
//   {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)} />  :  <p>{contact.address}</p> } */}
//   {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  :  <p>{contact.tell}</p>  } */}
//   {/* {show ? <h6 >{contactInfo.name}</h6> : <input/>  } */}
//   {/* {showInput ? <input/> : <h6>{contactInfo.name}</h6>} */}
//   {/* <p>{contact.address}</p>
//   <p>{contact.tell}</p> */}
//   <BiEdit onClick={(event)=>{event.stopPropagation();edit(contact,contact.id,contact.url)
//   setSelectedEdit(contact.id)}} />
//   {/* <BiEdit onClick={()=>{handleShowEdit(contact.id)}} /> */}
//   {/* <button onClick={()=>{handleShowEdit(contact.id)}}>edit</button> */}
//   <AiFillSave
//     className="task__close"
//     onClick={(event)=>{event.stopPropagation();save(contact,contact.id,contact.url)
//      }}
//   />
//   <FaWindowClose
//     className="task__close"
//     onClick={(event) =>{event.stopPropagation();onDelete(contact.id)}}/>
//   {/* {showMsg && <p>editted</p>} */}
//   {selected === contact.id ? <ContactInfo contact={contact} onDelete={onDelete} edit={edit} save={save} editContact={editContact} update={update}/> : "" }
//   {/* <ContactInfo className={`contact-info ${selected === contactInfo.id ? "active" : ""}`} contactInfo={contactInfo} /> */}
// </div>
//     // <div>
//       // <ContactCard showInput={showInput} handleShowInput={handleShowInput} selected={selected} onClick={handleShow } onEdit={handleShowEdit} selectedEdit={selectedEdit} onDelete={onDelete} key={contact.id}  contactInfo={contact} />
// // button




//  {/* {selectedEdit === contact.id ? <input/>  :  <h6 >{contact.name}</h6>  } */}
//       {/* {show ? <h6 >{contact.name}</h6> : <input/>  } */}
//       {/* {showInput ? <input/> : <h6>{contactInfo.name}</h6>} */}
//       <p>{contact.address}</p>
//       <p>{contact.tell}</p>
//       {/* <button onClick={()=>{onEdit(contact.id)}}>edit</button> */}