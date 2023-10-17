import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Success = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    address: {},
    passportNumber: "",
    email: "",
    phoneContact: "",
    selectedBike: "",
    selectedRentalOption: "",
  });

  useEffect(() => {
    // Parse the query parameters from the URL
    const searchParams = new URLSearchParams(location.search);

    // Retrieve and parse each form value
    const fullName = searchParams.get("fullName");
    const address = JSON.parse(searchParams.get("address") || "{}");
    const passportNumber = searchParams.get("passportNumber");
    const email = searchParams.get("email");
    const phoneContact = searchParams.get("phoneContact");
    const selectedBike = searchParams.get("selectedBike");
    const selectedRentalOption = searchParams.get("selectedRentalOption");

    console.log(fullName);

    // Set the formData state with the values from query parameters
    setFormData({
      fullName,
      address,
      passportNumber,
      email,
      phoneContact,
      selectedBike,
      selectedRentalOption,
    });
  }, [location.search]);

  return (
    <div>
      <h2>Payment Successful</h2>
      <p>Full Name: {formData.fullName}</p>
      <p>Address: {formData.address.address}</p>
      <p>City: {formData.address.city}</p>
      <p>State: {formData.address.state}</p>
      <p>Country: {formData.address.country}</p>
      <p>Postal Code: {formData.address.postalCode}</p>
      <p>Passport Number: {formData.passportNumber}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Contact: {formData.phoneContact}</p>
      <p>Selected Bike: {formData.selectedBike}</p>
      <p>Selected Rental Option: {formData.selectedRentalOption}</p>
      {/* Other success page content */}
    </div>
  );
};
