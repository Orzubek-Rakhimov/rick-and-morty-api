import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const App = lazy(() => import('../App')); // Import the App component
const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> // Replace <App /> with App
    }
])

export default router;
