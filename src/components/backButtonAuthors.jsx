import { Link } from "react-router-dom"

function BackButtonAuthors(){
    return (
        <>
            <Link to={"/authors"}>
                <div className="backButton">
                    <img src="/BackArrow.png" width={100} height={100}/>
                </div>
            </Link>
        </>
    )
}
export default BackButtonAuthors