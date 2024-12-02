import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Authors from "../pages/authors";
import VanillaTilt from 'vanilla-tilt';

function AuthorList(){

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
        fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors', {
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
            <div className="itemsBox">
                <ul>
                    {data.map((author, index) => (
                        <ul key={index}>
                            <Tilt options={{ scale: 1.05, max: 10, speed: 2000, reset: true, reverse: true }} className="authorBox">
                                <div className="idBox">
                                    <h3>{author.authorId}</h3>
                                </div>
                                <div className="authorNameBox">
                                    <p className="authorName">{author.firstName+" "+author.lastName}</p>
                                </div>
                                <div className="deleteButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors/${author.authorId}`, {method: 'DELETE'}); fetch('http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors', {method: 'GET',headers: {'Content-Type': 'application/json',}}).then(res => res.json()).then(data => {setData(data);})}}>
                                    <h2 className="editDeleteText">Delete</h2>
                                </div>
                                <Link to={`/authors/edit/${author.firstName}+${author.lastName}+${author.authorId}`}>
                                    <div className="editButton">
                                        <h2 className="editDeleteText">Edit</h2>
                                    </div>
                                </Link>
                            </Tilt>
                        </ul>
                    ))}
                </ul>
            </div>
        </>
    );
    
    
}
export default AuthorList