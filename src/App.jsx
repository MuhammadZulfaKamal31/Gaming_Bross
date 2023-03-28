import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "./pages/Login";

//implementasi lazy import
const HalamanUtama = lazy(() => import("../src/pages/HalamanUtama"));
const HalamanAbout = lazy(() => import("../src/pages/HalamanAbout"));
const HalamanDetail = lazy(() => import("../src/pages/HalamanDetail"));

//menggunakan react router dom versi terbaru.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "pertama",
        element: <HalamanUtama />,
    },
    {
        path: "about",
        element: <HalamanAbout />,
    },
    {
        path: "detail",
        element: <HalamanDetail />,
    },
]);

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
}

export default App;
