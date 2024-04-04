import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Book = () => {

  const {id} = useParams()
  return (
    <>
    <h3>book{id}</h3>
    </>
  )
}

export default Book