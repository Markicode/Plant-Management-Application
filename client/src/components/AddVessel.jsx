import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddVessel() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    vesselName: "",
    maxContent: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("/api/vessels/addvessel", form);
      console.log("Vessel added:", result);
      navigate("/vessels", { replace: true });
    } catch (err) {
      console.error("API call failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="vesselName"
          value={form.vesselName}
          onChange={handleChange}
          placeholder="Ketelnaam"
        />
        <input
          name="maxContent"
          value={form.maxContent}
          onChange={handleChange}
          placeholder="Maximale inhoud (kg)"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Locatie"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Bezig..." : "Voeg toe"}
        </button>
      </form>
    </>
  );
}
