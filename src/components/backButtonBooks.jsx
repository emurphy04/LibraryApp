import { Link } from "react-router-dom"

function BackButtonBooks(){
    return (
        <>
            <Link to={"/books"}>
                <div className="backButton">
                    <img src="/BackArrow.png" width={100} height={100}/>
                </div>
            </Link>
        </>
    )
}
export default BackButtonBooks