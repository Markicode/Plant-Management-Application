import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./components/providers/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
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
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="vessels" element={<Vessels />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="members" element={<Members />} />
            <Route path="managevessels" element={<ManageVessels />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
