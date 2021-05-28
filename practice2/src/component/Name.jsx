import React from 'react'
// import PropTypes from 'prop-types'
import './Name.css'

const Name = ({data,onAdd}) => {
    // console.log(data);
    // console.log(data.sex);
    const className = data.sex === 'girl'? 'person girl' : 'person boy'
    return (
        <div onClick={() => onAdd(data.id)} className={className}>
            {data.name}
        </div>
    )
}

// Name.propTypes = {

// }

export default Name
