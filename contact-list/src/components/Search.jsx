import React from 'react'
// import PropTypes from 'prop-types'
import './Search.css'
import {BsList} from "react-icons/bs"
import {VscListFilter} from "react-icons/vsc"

const Search = React.forwardRef(({onSearch, search,newSearch,searchTerm},ref) => {
    return (
        <div className='search-container'>
            <BsList className="list-icon"/>
            <input ref={ref}
                type="text" 
                value={search}
                className='search' 
                placeholder='&#128269; Search by Name' 
                onChange={(e) => onSearch(e.target.value)}
                onKeyDown={newSearch}
            />
             {/* <button onClick={newSearch}> Search </button> */}
            <VscListFilter className="list-filter"/>
        </div>
    )
});


export default Search

