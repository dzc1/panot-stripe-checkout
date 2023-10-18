import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePDF } from "react-to-pdf";

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

  const contentRef = useRef(); // Create a ref for the content to be generated as PDF

  const { toPDF, targetRef } = usePDF({
    filename: `${formData.fullName.replace(
      /\s+/g,
      "-"
    )}${formData.selectedBike.replace(
      /\s+/g,
      "-"
    )}-${formData.selectedRentalOption.replace(/\s+/g, "-")}-agreement.pdf`,
    options: {
      unit: "mm", // Set the unit of measurement to millimeters
      format: "a4", // Set the paper format to A4
      orientation: "portrait", // Set the orientation to portrait
    },
  });

  const generatePDF = () => {
    toPDF(contentRef.current); // Generate PDF for the content inside the ref
  };

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
          <div className="h-full flex items-center px-4" ref={targetRef}>
            <div
              className="bg-white rounded text-center mx-auto"
              ref={contentRef}
            >
              <div className="bg-slate-900 rounded-t py-4">
                <h2 className="text-white">{t("successPage.title")}</h2>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-wrap md:justify-between mb-4">
                  <p className="text-left font-bold mb-2">
                    Hotel{" "}
                    <span className="block font-light">
                      {formData.selectedBike}
                    </span>
                  </p>
                  <p className="text-left font-bold mb-2">
                    Rental Option{" "}
                    <span className="block font-light">
                      {formData.selectedRentalOption}
                    </span>
                  </p>
                </div>
                <p className="text-left font-bold mb-2">
                  Full Name{" "}
                  <span className="block font-light"> {formData.fullName}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  Address:{" "}
                  <span className="block font-light">
                    {" "}
                    {formData.address.address}, {formData.address.city}{" "}
                    {formData.address.state} {formData.address.postalCode},{" "}
                    {formData.address.country}
                  </span>
                </p>

                <p className="text-left font-bold mb-2">
                  Passport Number:{" "}
                  <span className="block font-light">
                    {formData.passportNumber}
                  </span>
                </p>
                <p className="text-left font-bold mb-2">
                  Email:{" "}
                  <span className="block font-light">{formData.email}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  Phone Contact:{" "}
                  <span className="block font-light">
                    {" "}
                    {formData.phoneContact}
                  </span>
                </p>
                <button
                  className="bg-slate-900 w-full p-2 text-white rounded mt-8"
                  onClick={generatePDF}
                >
                  Download PDF
                </button>
                <Link to="/">
                  <p className="mt-8 hover:underline">Rent Another Bike</p>{" "}
                </Link>
                {/* Other success page content */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
