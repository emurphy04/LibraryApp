import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import BackButtonBooks from "../components/backButtonBooks"
import { Link } from "react-router-dom"

function BooksEdit(){
    let location = useLocation()

    location = location.pathname.split('/')

    let id = location[3]

    const [bookName, setBookName] = useState("");

    const [date, setDate] = useState("");

    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setBookName(data.name);
                setDate(data.releaseDate);
        })
    }, []);

    return(
        <>
            <BackButtonBooks></BackButtonBooks>
            <div className="editBox">
                <input className="bookEditNameBox" value={bookName} onChange={(e) => setBookName(e.target.value)} type="text"/>
                <input className="dateBox" placeholder="YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)} type="text"/>
                <Link to={'/books'}>
                    <div className="submitButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books/${id}`, {method: 'PUT',headers: {'Content-Type': 'application/json',},body: JSON.stringify({name: bookName,author: book.author.authorId,release_date: date})});}}>
                        <h3>Confirm</h3>
                    </div>
                </Link>
            </div>
            
        </>
    )
}
export default BooksEdit