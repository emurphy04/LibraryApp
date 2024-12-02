import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BackButtonBooks from "../components/backButtonBooks";

function AddBook(){

    const [bookName, setBookName] = useState("");

    const [date, setDate] = useState("");

    const [authorId, setAuthorId] = useState();

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setAuthors(data)
        })
    }, []);

    return(
        <>
            <BackButtonBooks></BackButtonBooks>
            <div className="addBookBox">
                <input className="bookEditNameBox" placeholder="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} type="text"/>
                <input className="dateBox" placeholder="YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)} type="text"/>
                <h3>Author:</h3>
                <select className="selectBox" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    {authors.map((author, index) => (
                        <option key={index} value={author.authorId}>{author.firstName} {author.lastName}</option>
                    ))}
                </select>
                
                <Link to={'/books'}>
                    <div className="submitButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books`, {method: 'POST',headers: {'Content-Type': 'application/json',},body: JSON.stringify({name: bookName,author: parseInt(authorId),release_date: date})});}}>
                        <h3>Confirm</h3>
                    </div>
                </Link>
            </div>
            
        </>
    )
}
export default AddBook