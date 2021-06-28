import PropTypes from 'prop-types'
import React from 'react'
import Name from './Name'
import './NamesList.css'


const NamesList = ({datas, search,onAdd}) => {
// console.log(datas);
    const filterDatas = datas.filter(person => person.name.toLocaleLowerCase().startsWith(search))
    // const showNames = filterDatas.map(person => <Name data={person}/>)
//     const handleAdd = (personId)=>{
//           console.log(personId);
//         //   setFavorite(datas.filter((person) => person.id === personId));
// let favoriteData =datas.filter((person) => person.id === personId)
// setFavorite([...favorite,favoriteData])
//         }


    return (
        <div className='namesListContainer'>
           
            { filterDatas.map((person,index) => (
            <Name onAdd={onAdd} key={person.id} data={person}/>
            ) ) }
        </div>
    )
}

NamesList.propTypes = {
    datas: PropTypes.array,
    search: PropTypes.string
}

export default NamesList
