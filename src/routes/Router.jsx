import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDetails from "../pages/userDetails/UserDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    },
    {
        path:'/users/:id',
        element:<UserDetails></UserDetails>
    }
])

export default router;