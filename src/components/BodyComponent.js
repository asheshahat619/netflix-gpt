import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import BrowseComponent from "./BrowseComponent"
import { auth } from "../utilil/firebase"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser } from "../utilil/userSlice"
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<LoginComponent></LoginComponent>
    },
    {
        path:"/browse",
        element:<BrowseComponent/>
    }
])


const BodyComponent=()=>{

    return(
        <div >
                
    <RouterProvider router={appRouter}></RouterProvider>
  
        </div>
    )
}
export default BodyComponent