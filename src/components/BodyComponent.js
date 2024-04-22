import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import BrowseComponent from "./BrowseComponent"
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