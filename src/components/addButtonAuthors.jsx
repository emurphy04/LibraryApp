import { Link } from "react-router-dom"

function AddButtonAuthors(){
    return (
        <>
            <Link to={"/authors/add"}>
                <div className="addButton">
                    <img src="/AddButton.png" width={100} height={100}/>
                </div>
            </Link>
        </>
    )
}
export default AddButtonAuthors