"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatusMessage("Success");
      } else {
        setStatusMessage("Error");
      }
    } catch (err) {
      console.log(err);
      setStatusMessage("Error while send data");
    }
  };

  return (
    <div className="py-4 bg-blue-800">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-amber-50"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-amber-50"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}
