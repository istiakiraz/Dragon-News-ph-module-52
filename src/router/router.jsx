import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: ()=> fetch('/news.json'),

        children:[
            {
                index : true,
                element:<Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>auth file</h1>
    },
    {
        path: '/news',
        element: <h1>news section</h1>
    },
    {
        path: '/*',
        element: <h1>error page</h1>
    },
])