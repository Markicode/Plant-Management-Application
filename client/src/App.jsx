import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Vessels from "./components/Vessels";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vessels" element={<Vessels />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
