import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
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