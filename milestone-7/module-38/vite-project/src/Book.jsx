import React from 'react'

const Book = ({book}) => {
    const {bookname,writter,price} = book;
    const bookStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        backgroundColor: 'lightgray',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  
    }
  return (
    <div style={bookStyle} >
      <h1>Book name : { bookname}</h1>
      <h2> Book writter name {writter} </h2>
      <p> Book price : {price} </p>
    </div>
  )
}

export default Book
