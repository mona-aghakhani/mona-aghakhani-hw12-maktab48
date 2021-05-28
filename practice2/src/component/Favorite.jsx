import React,{useState} from 'react'
import { FaWindowClose } from "react-icons/fa";
import './Favorite.css'

 const Favorite = ({person,onDelete, onMouseOver,showBtn}) => {
  const [selected, setselected] = useState("");

    return (
        <div className="container-favorite">
            <p  className={person.sex === 'girl' ? 'girl-favorite' : "boy-favorite"}  onMouseOver={()=>setselected(person.id)}>{person.name}</p>
            <FaWindowClose
        className={`favorite__close ${selected === person.id ? "show" : ""}`}
        onClick={() => onDelete(person.id)}
      />
           {/* {selected && <FaWindowClose
        className="favorite__close"
        onClick={() => onDelete(person.id)}
      />}  */}
        </div>
    )
}
export default Favorite;