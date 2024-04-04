

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import BookList from  './Pages/BookList'
import { Link } from 'react-router-dom'
import Book from './Pages/Book'
import NewBook from './Pages/NewBook'
import NotFound from './Pages/NotFound'
import Header from './Pages/Header.jsx'

function App() {
  
  

  return (

    <>
    <Routes>
    <Route path="/books" element={<h1>Pramodh</h1>}></Route>
    </Routes>
    
    <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      {/* <Route path="/books" element={<BookList></BookList>} ></Route>  */}
      {/* <Route path="/books/:id" element={<Book></Book>} ></Route>  */}
      
      <Route path="/books" element={<Header></Header>}>
        <Route index element={<BookList></BookList>}></Route>
        <Route path=':id' element={<Book></Book>}></Route>
        <Route path='new' element={<NewBook></NewBook>}></Route>
      </Route>
      {/* <Route path="/books/new" element={<NewBook></NewBook>} ></Route>  */}
      <Route path="*" element={<NotFound></NotFound>} ></Route>
    </Routes>
    </>
  )
}

export default App
