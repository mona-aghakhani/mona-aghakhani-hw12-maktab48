import React, { useState,useEffect } from "react";
import Search from "../components/Search"
import {AiFillHome} from "react-icons/ai"
import {BsBoxArrowUp} from "react-icons/bs"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {HiViewGrid} from "react-icons/hi"
// import Contacts from "./Contacts"
import ContactList from "../components/ContactList"
import AddContact from "../components/AddContact"
import ContactInfo from "../components/ContactInfo"
import UseLocalStorage from "../components/UseLocalStorage"
import user1 from "./user1.jpg"
import user2 from "./user2.jpg"
import user3 from "./user3.jpg"
import user4 from "./user4.jpg"
import user5 from "./user5.jpg"
import user6 from "./user6.jpg"
import profile from "./profile.png"

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ed Revalo",
      address: "new jersey",
      tell: 111111 ,
      email:"Revalo@gmail.com",
      url: user1,
    },
    {
      id: 2,
      name: "brenda",
      address: "florida",
      tell: 222222,
      email:"brenda@gmail.com",
      url: user2,
    },
    {
      id: 3,
      name: "Betty",
      address: "michigan",
      tell: 333333,
      email:"Betty@gmail.com",
      url: user3,
    },
    {
      id: 4,
      name: "neil",
      address: "ohio",
      tell: 444444,
      email:"neil@gmail.com",
      url: user4,
    },
    {
      id: 5,
      name: "penna",
      address: "national",
      tell: 555555,
      email:"penna@gmail.com",
      url: user5,
    },
    {
      id: 6,
      name: "Ronaldo",
      address: "alabama",
      tell: 666666,
      email:"Ronaldo@gmail.com",
      url: user6,
    },
    
  ]);
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

  /*
  * useref for save lastitem search
  */
  const ref = React.createRef();
  const [searchTerm, setSearchTerm] = UseLocalStorage(
    "search",
    "Not searched yet"
  );
 
  const newSearch = (e) => {
    if (e.keyCode === 13) {
      setSearchTerm(ref.current.value);
        }
  };
  
const [close, setClose] = useState(false)
const handleclose = ()=>{
  setClose(true)
}
  const [showAddContact, setShowAddContact] = useState(false);
  const [closeAdd, setCloseAdd] = useState(false)
  const handlecloseAdd = ()=>{
    setCloseAdd(true)
  }
const handleAddContact = (contact)=>{
  // console.log("contact");
  let id=(contacts.length)+1;
  let url=profile;
  let newContact ={...contact,id,url}
  setContacts([...contacts,newContact])
  setCloseAdd(false)
  // setClose(false)
}
const handleDelete = (contactId) => {
  // console.log(contactId);
  setContacts(contacts.filter((contact) => contact.id !== contactId));
// console.log(contacts);
};

const [selectedContact, setSelectedContact] = useState(null);
const handleShow = (obj, contactId) =>{
  setSelectedContact(obj)
  setClose(false)
 
  }
const [editIndex, setEditIndex] = useState(-1)

const [editted, seteditted] = useState(false)
const [editContact, setEditContact] = useState(null)

const save= (obj,contactId,contactUrl)=>{
  let url=contactUrl
  let mycontact={...editContact,url}
  // console.log(mycontact);
  setEditContact(mycontact)
  if (editIndex === -1) {
    return
  }

let newContacts=contacts.splice(contactId-1,1,mycontact)

setContacts(contacts)
setSelectedContact(mycontact)
// setEditContact({})
setEditContact(null)
// setEditContact(obj)
  setEditIndex(-1)
  // seteditted(!editted)
  // seteditted(true)
  seteditted(prevEditted => !prevEditted ? true : true  )
}
const update=(e)=>{
  let obj={}
  obj[e.target.name]=e.target.value;
  let newContact ={...editContact,...obj}
  setEditContact(newContact)
}
const edit=(obj)=>{
  // console.log(obj);
  // seteditted(false)
  // seteditted(prevEditted =>prevEditted ? false : false  )
  setEditContact(obj)
  setEditIndex((obj.id)-1)

}

    return (
      // <div className="app-container">
      <div className="container-contact">
      <Search ref={ref} newSearch={newSearch} searchTerm={searchTerm} onSearch={handleSearch} search={search} />
      <p className="last-search">Last search: {searchTerm}</p>
      {showAddContact && !closeAdd && <AddContact onAddContact={handleAddContact} onClose={handlecloseAdd}/>}
      <div className="header-contact">
      <p>contacts(6)</p>
      <div className="header-right">
      <AiOutlineUnorderedList/>
      <HiViewGrid/>
      </div>
      </div>
      <ContactList  handleShow={handleShow} edit={edit} update={update} editContact={editContact} editted={editted} contacts={contacts}  save={save}  search={search} onDelete={handleDelete}  />
    {selectedContact && !close && <ContactInfo contactInfo={selectedContact} onDelete={handleDelete} edit={edit} update={update} save={save} editContact={editContact} onClose={handleclose} /> } 
     <div onClick={()=>setShowAddContact(!showAddContact)} className="cicle-plus">+</div>
     <div className="container-icon">
     <AiFillHome className="home-icon"/>
     <BsBoxArrowUp className="arrow-up"/>
     </div> 
       </div>
      //  </div>
    );
};
export default App;

  


















// import React, { Component } from 'react';

// import Contacts from './containers/Contacts.jsx'

// /*App component starts here */
// class App extends Component {

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-7 offset-sm-2">
//             <span className="title">Contacts</span>
//               <Contacts />
//           </div>
//         </div>
//       </div>
    
  
     
//     );
//   }
// }

// export default App;
