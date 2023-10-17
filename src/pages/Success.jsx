import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Success = () => {
  const { t, i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
    <>
      <section>
        <div
          className="bg-white overflow-hidden  h-screen"
          style={{
            backgroundImage: 'url("/background-min.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full flex items-center ">
            <div className="bg-blue-200 text-center mx-auto p-10 w-1/2 h-1/2">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
