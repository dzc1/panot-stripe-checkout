import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePDF } from "react-to-pdf";
import { AFourRecipt } from "../components/paper/AFourRecipt";
import { Link } from "react-router-dom";

export const Success = () => {
  const { t, i18n } = useTranslation();

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

  const [hidden, setHiden] = useState(false);
  const handleEvent = () => {
    console.log("Event triggered in parent component");
    setHiden(true);
    console.log(hidden);
    // You can perform any necessary actions here
  };

  const addressObject = {
    street: formData.address.address,
    city: formData.address.city,
    state: formData.address.state,
    postalCode: formData.address.postalCode,
    country: formData.address.country,
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
          <div className="h-full flex items-center px-4">
            <div className="bg-white rounded text-center mx-auto">
              <div className="bg-slate-900 rounded-t py-4">
                <h2 className="text-white">{t("successPage.title")}</h2>
              </div>
              {!hidden && (
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
                    <span className="block font-light">
                      {" "}
                      {formData.fullName}
                    </span>
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
                    onClick={handleEvent}
                    className="bg-slate-900 w-full p-2 text-white rounded mt-8"
                  >
                    Generate PDF
                  </button>
                  {/* Other success page content */}
                </div>
              )}
              {hidden && (
                <div className="my-6 px-4">
                  <AFourRecipt
                    onEvent={handleEvent}
                    hotel={formData.selectedBike}
                    rentalOption={formData.selectedRentalOption}
                    fullName={formData.fullName}
                    address={addressObject}
                    passport={formData.passportNumber}
                    email={formData.email}
                    phone={formData.phoneContact}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
