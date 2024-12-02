import { Link } from "react-router-dom";
function AddBookButton(){
    return(
        <>
            <Link to={"/books/add"}>
                <div className="addButton">
                    <img src="/AddButton.png" width={100} height={100}/>
                </div>
            </Link>
        </>
    )
}
export default AddBookButton