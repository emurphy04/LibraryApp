import BackButton from "../components/backButton"
import AuthorList from "../components/authorList"
import AddButtonAuthors from "../components/addButtonAuthors"

function Authors(){
    return(
        <>
            <BackButton></BackButton>
            <AddButtonAuthors></AddButtonAuthors>
            <AuthorList></AuthorList>
        </>
    )
}

export default Authors