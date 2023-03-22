import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HalamanDetail from "./pages/HalamanDetail";
import Navbar from "./component/Navbar";
import HalamanUtama from "./pages/HalamanUtama";
import HalamanAbout from "./pages/HalamanAbout";
import Footer from "./component/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<HalamanUtama />} />
                    <Route path='/Detail' element={<HalamanDetail />} />
                    <Route path='/About' element={<HalamanAbout />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
