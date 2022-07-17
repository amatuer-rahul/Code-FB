import React from 'react'

const Card = (props) => {
    const {name, rating, date} = props;
  return (
    <div className='movieCard'>
        <div>Movie Name: {name}</div>
        <div>Rating: {rating}</div>
        <div>Release Date: {date}</div>
    </div>
  )
}

export default Card
