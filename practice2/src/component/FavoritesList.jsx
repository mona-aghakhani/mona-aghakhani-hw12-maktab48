import React,{useState} from 'react'
// import Name from './Name'
import './FavoritesList.css'
// import { FaWindowClose } from "react-icons/fa";
import Favorite from "./Favorite"

 const FavoritesList = ({dataFavorite,onDelete,show,onMouseOver}) => {
console.log(dataFavorite);
//  const [showBtn, setShowBtn] = useState(false)
// const styleName = dataFavorite.sex === 'girl'? ' girl-favorite' : 'boy'
// console.log(dataFavorite[0].name);
// const show = () =>{
//     console.log(111);
//     setShowBtn(!showBtn)
// }
    return (
        <div>
            <p className="header-favorite">Favorite List</p>
        <div className="favorit">
            
             {dataFavorite.length !==0 && dataFavorite.map((person,index) => (
                 <Favorite key={person.id} person={person} onMouseOver={onMouseOver} showBtn={show} onDelete={onDelete} />
                //    <FaWindowClose className="task__close" onClick={() => onDelete(task.id)} />
        //    <p>{person.name}</p>
            ) ) }
         
        </div>
        </div>
    )
}
export default FavoritesList;
