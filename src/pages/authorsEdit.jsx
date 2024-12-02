import BackButtonAuthors from "../components/backButtonAuthors"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Redirect } from "postman-request/lib/redirect"
import { Link } from "react-router-dom"

function AuthorsEdit(){
    let location = useLocation()

    location = location.pathname.split('/')

    let name = location[3].split('+')

    let id = name[2]

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    useEffect(() => {
        setFirstName(name[0]);
        setLastName(name[1]);
    }, []);

    

    return(
        <>
            <BackButtonAuthors></BackButtonAuthors>
            <div className="editBox">
                <input className="firstNameBox" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
                <input className="lastNameBox" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
                <Link to={'/authors'}>
                    <div className="submitButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors/${id}`, {method: 'PUT',headers: {'Content-Type': 'application/json',},body: JSON.stringify({firstName: firstName,lastName : lastName})});}}>
                        <h3>Confirm</h3>
                    </div>
                </Link>
            </div>
            
        </>
    )
}
export default AuthorsEdit