import { Link } from "react-router-dom"

function BackButton(){
    return (
        <>
            <Link to={"/"}>
                <div className="backButton">
                    <img src="/BackArrow.png" width={100} height={100}/>
                </div>
            </Link>
        </>
    )
}
export default BackButton