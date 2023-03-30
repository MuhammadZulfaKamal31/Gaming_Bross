import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        path: "pertama/detail",
        element: <HalamanDetail />,
    },
]);

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading</div>}>
                <Navbar />
                <RouterProvider router={router} />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
