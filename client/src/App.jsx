import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/views/Layout.jsx";
import Vessels from "./components/views/Vessels.jsx";
import Home from "./components/views/Home.jsx";
import NotFound from "./components/views/NotFound.jsx";
import Login from "./components/views/Login.jsx";
import ManageVessels from "./components/views/ManageVessels.jsx";
import Products from "./components/views/Products.jsx";
import Members from "./components/views/Members.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vessels" element={<Vessels />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="members" element={<Members />} />
          <Route path="managevessels" element={<ManageVessels />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
