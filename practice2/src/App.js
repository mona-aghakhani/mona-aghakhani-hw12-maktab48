import React, { useState } from 'react';
// import Name from './component/Name'
import NamesList from './component/NamesList';
// import PEOPLE from './data'
import './App.css';
import Search from './component/Search';
import ClearList from './component/ClearList';
import FavoritesList from './component/FavoritesList';

function App() {
  const [people, setPeople] = useState([
    {
        id: 0,
        name: 'Aria',
        sex: 'girl'
    }, {
        id: 1,
        name: 'Logan',
        sex: 'boy'
    }, {
        id: 2,
        name: 'Quinn',
        sex: 'girl'
    }, {
        id: 3,
        name: 'Kai',
        sex: 'boy'
    }, {
        id: 4,
        name: 'Dashiell',
        sex: 'boy'
    }, {
        id: 5,
        name: 'John',
        sex: 'boy'
    }, {
        id: 6,
        name: 'Seraphina',
        sex: 'girl'
    }, {
        id: 7,
        name: 'Caroline',
        sex: 'girl'
    }, {
        id: 8,
        name: 'Tobias',
        sex: 'boy'
    }, {
        id: 9,
        name: 'Harper',
        sex: 'girl'
    }, {
        id: 10,
        name: 'Mabe',
        sex: 'girl'
    }, {
        id: 11,
        name: 'Iris',
        sex: 'girl'
    }, {
        id: 12,
        name: 'Beatrice',
        sex: 'girl'
    }, {
        id: 13,
        name: 'Knox',
        sex: 'boy'
    }, {
        id: 14,
        name: 'August',
        sex: 'boy'
    }, {
        id: 15,
        name: 'Poppy',
        sex: 'girl'
    }, {
        id: 16,
        name: 'Aurora',
        sex: 'girl'
    }, {
        id: 17,
        name: 'Wyatt',
        sex: 'boy'
    }, {
        id: 18,
        name: 'Ezra',
        sex: 'boy'
    }, {
        id: 19,
        name: 'Emily',
        sex: 'girl'
    }, {
        id: 20,
        name: 'Sebastian',
        sex: 'boy'
    }
])
//   const PEOPLE = [
//     {
//         id: 0,
//         name: 'Aria',
//         sex: 'girl'
//     }, {
//         id: 1,
//         name: 'Logan',
//         sex: 'boy'
//     }, {
//         id: 2,
//         name: 'Quinn',
//         sex: 'girl'
//     }, {
//         id: 3,
//         name: 'Kai',
//         sex: 'boy'
//     }, {
//         id: 4,
//         name: 'Dashiell',
//         sex: 'boy'
//     }, {
//         id: 5,
//         name: 'John',
//         sex: 'boy'
//     }, {
//         id: 6,
//         name: 'Seraphina',
//         sex: 'girl'
//     }, {
//         id: 7,
//         name: 'Caroline',
//         sex: 'girl'
//     }, {
//         id: 8,
//         name: 'Tobias',
//         sex: 'boy'
//     }, {
//         id: 9,
//         name: 'Harper',
//         sex: 'girl'
//     }, {
//         id: 10,
//         name: 'Mabe',
//         sex: 'girl'
//     }, {
//         id: 11,
//         name: 'Iris',
//         sex: 'girl'
//     }, {
//         id: 12,
//         name: 'Beatrice',
//         sex: 'girl'
//     }, {
//         id: 13,
//         name: 'Knox',
//         sex: 'boy'
//     }, {
//         id: 14,
//         name: 'August',
//         sex: 'boy'
//     }, {
//         id: 15,
//         name: 'Poppy',
//         sex: 'girl'
//     }, {
//         id: 16,
//         name: 'Aurora',
//         sex: 'girl'
//     }, {
//         id: 17,
//         name: 'Wyatt',
//         sex: 'boy'
//     }, {
//         id: 18,
//         name: 'Ezra',
//         sex: 'boy'
//     }, {
//         id: 19,
//         name: 'Emily',
//         sex: 'girl'
//     }, {
//         id: 20,
//         name: 'Sebastian',
//         sex: 'boy'
//     }
// ]
const sortArr =(data) =>{
data.sort(function(a, b){
  var x = a.name.toLowerCase();
  var y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
// console.log(data);
// return data
}
sortArr(people);
// console.log(people);
// const handleAdd = (personId)=>{
//   console.log(personId);
//   let favorite=PEOPLE.filter((person) => task.id !== personId);
// }
const [favorite, setFavorite] = useState([])

const handleAdd = (personId) => {
//   console.log(personId);
//   setFavorite(datas.filter((person) => person.id === personId));
// let favoriteData =people.filter((person) => person.id === personId)
setPeople(people.filter((person) => person.id !== personId))
// console.log(people);
let favoriteData =people.filter((person) => person.id === personId)
// console.log(favoriteData);
let newFavorite=favorite.concat(favoriteData)
setFavorite(newFavorite)
}
const [showBtn, setShowBtn] = useState(false)
const handleshow = (personId) =>{
    console.log(personId);
    let tempArr= favorite.map(person => false)
    let index=favorite.findIndex(person =>  person.id === personId)
    tempArr[index]=true
    setShowBtn(tempArr)
//     setShowBtn(favorite.map((person) =>
//     person.id !== personId ? true : false
//    ))
    
}
const handleDelete =(personId) =>{
    console.log(personId);
    setFavorite(favorite.filter((person) => person.id !== personId))
    console.log(favorite);
}
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

  const handleClearInput = () =>{
    setSearch('')
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <FavoritesList onMouseOver={handleshow} show={showBtn} onDelete={handleDelete} dataFavorite={favorite} />
      <NamesList onAdd={handleAdd} datas={people} search={search}/>
      {search && <ClearList content='Clear List' onClick={handleClearInput}/>}
    </div>
  );
}

export default App;
