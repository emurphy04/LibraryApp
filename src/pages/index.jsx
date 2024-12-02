import { Link } from 'react-router-dom'

function Index(){
    return(
        <div>
            <Link to={'/authors'}>
                <div className="authorsButton">
                    <h1>Authors</h1>
                </div>
            </Link>
            <Link to={'/books'}>
                <div className="booksButton">
                    <h1>Books</h1>
                </div>
            </Link>
        </div>
    )
}

export default Index