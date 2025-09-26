import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NoAuth from "./components/views/NoAuth.jsx";
import "./App.css";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Layout levert altijd de context */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            {/* Routes die authentication + role check nodig hebben */}
            <Route element={<PrivateRoute roles={["user", "admin"]} />}>
              <Route path="vessels" element={<Vessels />} />
              <Route path="products" element={<Products />} />
              <Route path="noauth" element={<NoAuth />} />
            </Route>

            <Route element={<PrivateRoute roles={["admin"]} />}>
              <Route path="members" element={<Members />} />
              <Route path="managevessels" element={<ManageVessels />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
