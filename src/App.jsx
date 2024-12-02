import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Index from './pages/index'
import Authors from './pages/authors'
import Books from './pages/books'
import AuthorsEdit from './pages/authorsEdit'
import AuthorAdd from './pages/authorAdd'
import BooksEdit from './pages/booksEdit'
import AddBook from './pages/bookAdd'

function App() {

  const [authors, setAuthors] = useState([]);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            setAuthors(data);
    })
  }, []);

  useEffect(() => {
    fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            setBooks(data);
    })
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/authors' element={<Authors/>}/>
          <Route path='/authors/add' element={<AuthorAdd/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/books/add' element={<AddBook/>}/>
          {books.map((book, index) => (
            <Route key={index} path={`/books/edit/${book.bookId}`} element={<BooksEdit/>} />
          ))}
          {authors.map((author, index) => (
            <Route key={index} path={`/authors/edit/${author.firstName}+${author.lastName}+${author.authorId}`} element={<AuthorsEdit authorId={author} />} />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App
