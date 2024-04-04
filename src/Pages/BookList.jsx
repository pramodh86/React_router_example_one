import React from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
  return (
    <>
    <div>BookList</div>
    <Link to="/books/1">book1</Link>
    <Link to="/books/2">book2</Link>
    </>
  )
}

export default BookList