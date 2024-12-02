import BackButton from "../components/backButton"
import BookList from "../components/bookList"
import AddBookButton from "../components/addButtonBooks"

function Books(){
    return(
        <>
            <BackButton></BackButton>
            <AddBookButton></AddBookButton>
            <BookList></BookList>
        </>
    )
}

export default Books