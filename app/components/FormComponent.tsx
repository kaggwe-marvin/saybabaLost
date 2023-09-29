"use client";
import { db } from "@/firebase/firebase";
import { ReportItem } from "@/typings";
import { addDoc, collection } from "firebase/firestore";
// FormComponent.tsx
import React, { useState } from "react";

const FormComponent: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState<ReportItem>({
    firstName: "",
    lastName: "",
    cardNumber: "",
    category: "school",
    collectionPoint: "mainGate",
    region: "mubs",
    id: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataRef = collection(db, "lost"); // Replace with your Firestore collection name
      await addDoc(dataRef, formData); // Add a new document with the form data

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        cardNumber: "",
        collectionPoint: "mainGate",
        category: "school",
        region: "mubs",
        id: "",
      });
      console.log("Data added successfully!");
      alert("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div>
      <h2>Data Collection Form</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border p-2"
            required>
            <option value="school">School</option>
            <option value="national">National</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Collection Point */}
        <div className="mb-4">
          <label htmlFor="collectionPoint" className="block mb-2">
            Collection Point
          </label>
          <select
            id="collectionPoint"
            name="collectionPoint"
            value={formData.collectionPoint}
            onChange={handleInputChange}
            className="w-full border p-2"
            required>
            <option value="mainGate">Main Gate</option>
            <option value="smallGate">Small Gate</option>
          </select>
        </div>

        {/* Region */}
        <div className="mb-4">
          <label htmlFor="region" className="block mb-2">
            Region
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            className="w-full border p-2"
            required>
            <option value="mubs">MUBS</option>
            <option value="muk">MUK</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
