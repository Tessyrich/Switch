import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./Pages/Men/Men";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Collections from "./Pages/Collections/Collections";
import Women from "./Pages/Women/Women";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home/Home";

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/Switch/collections" element={<Collections />} />
            <Route path="/switch/men" element={<Men />} />
            <Route path="/switch/Women" element={<Women />} />
            <Route path="/switch/about" element={<About />} />
            <Route path="/switch/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
