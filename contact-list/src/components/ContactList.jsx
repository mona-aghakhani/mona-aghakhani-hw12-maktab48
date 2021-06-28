import React,{useState,useEffect} from 'react'
import ContactCard from './ContactCard';
import ContactInfo from "./ContactInfo"
import './ContactCard.css'
import {RiBookmark3Fill} from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"

 const ContactList = ({contacts,onClick,search,handleShow,editContact,editted,showMsg,onDelete,showInput,handleShowInput,update,edit,save}) => {
  const filterDatas = contacts.filter(person => person.name.toLocaleLowerCase().startsWith(search))

  const [selected, setSelected] = useState(false);
  // const [selectedEdit, setSelectedEdit] = useState("");
  const [selectedEdit, setSelectedEdit] = useState(false);
  // const [toggleShow, setToggleShow] = useState(true);
  // const [editContact, setEditContact] = useState({})
// const handleShow = () =>{
//   alert(1)
//   setSelected(true)

// }

  const [word, setWord] = useState(false)
  // const [seconds, setSecond] = useState(0)
  const [index,setIndex]=useState(0);
const [chek, setChek] = useState(true)

  // useEffect(() => {
  //   setWord(`editted`)
  //   console.log(editted);

  //   // setIndex(index+1)
  //   // setChek(!chek)
  //   // console.log(chek);
  //   // setWord(true)
  //   // console.log(word);
  //   // setIndex(index+1)
  //   // setWord(`it is changed ${index}`)
  // }, [editted])
  // useEffect(() => {
  //   // setIndex(index =>index+1)
  //   setWord(`editted`)
  // }, [filterDatas])
  // useEffect(() => {
  //   // setIndex(index =>index+1)
  //   setWord(`editted`)
  // }, [contacts])
  // const [showMsg, setShowMsg] = useState(false)
  // console.log(showMsg);
  // useEffect(() => {
  //   setShowMsg(!showMsg)
  // }, [contactList])
  // console.log(contacts);
  return (
    <div className="parent-card">
   {filterDatas.map((contact,index)=>(
     <ContactCard  contact={contact} onClick={handleShow} edit={edit} editContact={editContact} update={update} save={save} editted={editted} showInput={showInput} handleShowInput={handleShowInput} selected={selected}  selectedEdit={selectedEdit} onDelete={onDelete} key={contact.id}  />
   
   ))}
      
    </div>
  )
}
export default ContactList;


// onEdit={handleShowEdit} 


// import React,{useState} from 'react'
// import ContactCard from './ContactCard';
// // import user1 from "./user1.jpg"
// // import user2 from "./user2.jpg"
// // import user3 from "./user3.jpg"
// // import user4 from "./user4.jpg"
// // import user5 from "./user5.jpg"
// // import user6 from "./user6.jpg"
// // import user7 from "./user7.jpg"
// // import user8 from "./user8.jpg"
// // import user9 from "./user9.jpg"
// // import user10 from "./user10.jpg"
//  const ContactList = ({contactList,search,onDelete,showInput,handleShowInput}) => {
//   const filterDatas = contactList.filter(person => person.name.toLocaleLowerCase().startsWith(search))

//   const [selected, setselected] = useState("");
//   const [selectedEdit, setSelectedEdit] = useState("");
// const handleShow = (contactId) =>{
// setselected(contactId)
// console.log('click');
// console.log(contactId);
// console.log(selected);
// }
// const handleShowEdit = (contactId) =>{
//   setSelectedEdit(contactId)
//   console.log('click');
//   console.log(contactId);
//   console.log(selected);
//   }
//   return (
//     <div className="parent-card">
//         {filterDatas.map((contact,index)=>(
//           // <div>
//             <ContactCard showInput={showInput} handleShowInput={handleShowInput} selected={selected} onClick={handleShow } onEdit={handleShowEdit} selectedEdit={selectedEdit} onDelete={onDelete} key={contact.id}  contactInfo={contact} />
//     // button
//         ))

//         }
//       {/* <img className="img-card" src={contactList.url}  />
//       <h3>{contactList.name}</h3>
//       <p>{contactList.address}</p>
//       <p>{contactList.tell}</p> */}
//     </div>
//   )
// }
// export default ContactList;