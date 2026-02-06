import { Routes, Route } from "react-router-dom";

import TopInfoBar from "./components/TopInfoBar";
import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import GalleryPage from "./pages/Gallery";
import Contact from "./pages/Contact";
import Clientale from "./pages/Clientale";
import Infrastructure from "./pages/Infrastructure";
import Patron from "./pages/Patron";

<Route path="/patron" element={<Patron />} />


function App() {
  return (
    <>
      <TopInfoBar />
      <MainHeader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientale" element={<Clientale />} />
        <Route path="/patron" element={<Patron />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
