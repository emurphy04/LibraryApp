import BackButtonAuthors from "../components/backButtonAuthors";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AuthorAdd(){

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    return(
        <>
            <BackButtonAuthors></BackButtonAuthors>
            <div className="editBox">
                <input className="firstNameBox" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
                <input className="lastNameBox" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
                <Link to={'/authors'}>
                    <div className="submitButton" onClick={async() => {const response = await fetch(`http://libraryapi-env.eba-zpdkq3va.us-east-1.elasticbeanstalk.com/api/v1/authors`, {method: 'POST',headers: {'Content-Type': 'application/json',},body: JSON.stringify({firstName: firstName,lastName : lastName})});}}>
                        <h3>Confirm</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default AuthorAdd