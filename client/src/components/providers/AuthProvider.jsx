/*import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("api/users/me")
      .then((res) => {
        setUser(res.data?.user || null);
        console.log(res.data.user);
      })
      .catch(() => {
        setUser(null);
        console.log("User op null gezet bij /me call");
      });
  }, []);

  const login = async (username, password) => {
    try {
      console.log("authprovider login step");
      const res = await axios.post("api/users/login", { username, password });
      setUser(res.data.user);
      return true;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    await axios.post("api/users/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}*/

import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUser(res.data?.user || null);
      } catch (err) {
        console.error(
          "Failed to fetch current user:",
          err.response?.data || err
        );
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      const res = await axios.post(
        "/api/users/login",
        { username, password },
        { withCredentials: true }
      );
      setUser(res.data?.user || null);
      return true;
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      return false;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
