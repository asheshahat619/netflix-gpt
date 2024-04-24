import { useSelector } from "react-redux"

const BrowseComponent=()=>{
    const selectore=useSelector((store)=>store.user)
    console.log(selectore)
    return(
        <>
        BrowseComponent
        </>
    )
}
export default BrowseComponent