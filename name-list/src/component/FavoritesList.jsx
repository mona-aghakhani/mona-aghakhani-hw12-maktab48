import React from 'react'
// import Name from './Name'
import './FavoritesList.css'
// import { FaWindowClose } from "react-icons/fa";
import Favorite from "./Favorite"

 const FavoritesList = ({dataFavorite,onDelete,show,onMouseOver}) => {
console.log(dataFavorite);

    return (
        <div>
            <p className="header-favorite">Favorite List</p>
        <div className="favorit">
            
             {dataFavorite.length !==0 && dataFavorite.map((person,index) => (
                 <Favorite key={person.id} person={person} onMouseOver={onMouseOver} showBtn={show} onDelete={onDelete} />
           
            ) ) }
         
        </div>
        </div>
    )
}
export default FavoritesList;
