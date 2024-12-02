import { useState, useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import { Link } from "react-router-dom";

function BookList(){
    const [data, setData] = useState([]);
    
    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);
      
        useEffect(() => {
          VanillaTilt.init(tilt.current, options);
        }, [options]);
      
        return <div ref={tilt} {...rest} />;
      }
    
    useEffect(() => {
        fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
        })
    }, []);

    return (
        <>
            <ul>
                {data.map((book, index) => (
                    <ul key={index}>
                        <Tilt options={{ scale: 1.05, max: 5, speed: 3000, reset: true, reverse: true }} className="bookBox">
                            <div className="bookIdBox">
                                <p>{book.bookId}</p>
                            </div>
                            <div className="bookNameBox">
                                <h2>{book.name}</h2>
                            </div>
                            <div>
                                <p>By: {book.author.firstName} {book.author.lastName} | Released: {book.releaseDate}</p>
                            </div>
                            <Link to={`/books/edit/${book.bookId}`}>
                                <div className="editBookButton">
                                    <h3>Edit</h3>
                                </div>
                            </Link>
                            <div className="deleteBookButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books/${book.bookId}`, {method: 'DELETE'}); fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/books', {method: 'GET',headers: {'Content-Type': 'application/json',}}).then(res => res.json()).then(data => {setData(data);})}}>
                                <h3>Delete</h3>
                            </div>
                        </Tilt>
                    </ul>
                ))}
            </ul>
        </>
    );
}
export default BookList