import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AFourRecipt = ({
  hotel,
  rentalOption,
  fullName,
  address,
  passport,
  email,
  phone,
  onEvent,
  stripeId,
}) => {
  const componentRef = useRef();
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const visibility = () => {
    console.log(isHidden);
    handlePrint();
    if (onEvent) {
      onEvent();
    }
  };

  const { street, city, state, postalCode, country } = address;
  const { t } = useTranslation();
  return (
    <>
      {/* Conditionally render the div based on the 'isHidden' state */}
      {isHidden && (
        <>
          <div className="page" ref={componentRef}>
            <div className="subpage">
              <div className="p-8">
                <h2 className="text-2xl font-light mb-8">
                  {t("successPage.confirmationHeading")}
                </h2>
                <div className="flex flex-col md:flex-wrap md:justify-between mb-4">
                  <p className="text-left font-bold mb-2">
                    {t("successPage.data.hotel")}
                    <span className="block font-light">{hotel}</span>
                  </p>
                  <p className="text-left font-bold mb-2">
                    {t("successPage.data.option")}
                    <span className="block font-light">{rentalOption}</span>
                  </p>
                </div>
                <p className="text-left font-bold mb-2">
                  {t("successPage.data.name")}
                  <span className="block font-light"> {fullName}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  {t("successPage.data.address")}
                  <span className="block font-light">
                    {street} {city} {state}, {country} {postalCode}
                  </span>
                </p>

                <p className="text-left font-bold mb-2">
                  {t("successPage.data.passport")}
                  <span className="block font-light">{passport}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  {t("successPage.data.email")}
                  <span className="block font-light">{email}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  {t("successPage.data.phone")}
                  <span className="block font-light"> {phone}</span>
                </p>
                <p className="text-left font-bold mb-2">
                  {t("successPage.data.checkoutSessionId")}
                  <span className="block font-light"> {stripeId}</span>
                </p>
                {/* Other success page content */}
              </div>
            </div>
          </div>
          <button
            className="bg-slate-900 w-full p-2 text-white rounded my-8"
            onClick={visibility}
          >
            {t("successPage.printButton")}
          </button>
          <Link to="/">
            <button className="text-slate-800 hover:underline cursor-pointer mb-8">
              {t("successPage.rentAnotherButton")}
            </button>
          </Link>
        </>
      )}
    </>
  );
};
