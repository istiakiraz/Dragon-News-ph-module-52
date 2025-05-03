import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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