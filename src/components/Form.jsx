import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Popup } from "./popup/Popup";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PB_KEY);
  }
  return stripePromise;
};

export const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    formSteps: {
      step: 1,
      selectedBike: null,
      hotel: [
        {
          title: "Hotel Marriot",
          rentalOptions: [
            {
              id: 1,
              name: t("rentalOptions.one.name"),
              timeFrame: t("rentalOptions.one.timeFrame"),
              stripeId: "price_1O2LA4I5XtUC28eO0BIRbiM8",
            },
            {
              id: 2,
              name: t("rentalOptions.two.name"),
              timeFrame: t("rentalOptions.two.timeFrame"),
              stripeId: "price_1O2LA4I5XtUC28eORjtI7xJt",
            },
            {
              id: 3,
              name: t("rentalOptions.three.name"),
              timeFrame: t("rentalOptions.three.timeFrame"),
              stripeId: "price_1O2LA4I5XtUC28eOLpWfvKhm",
            },
          ],
        },
        {
          title: "Hotel Daniya",
          rentalOptions: [
            {
              id: 1,
              name: t("rentalOptions.one.name"),
              timeFrame: t("rentalOptions.one.timeFrame"),
              stripeId: "price_1O2LEPI5XtUC28eO1x6QzSEH",
            },
            {
              id: 2,
              name: t("rentalOptions.two.name"),
              timeFrame: t("rentalOptions.two.timeFrame"),
              stripeId: "price_1O2LEPI5XtUC28eOS23GAKj6",
            },
            {
              id: 3,
              name: t("rentalOptions.three.name"),
              timeFrame: t("rentalOptions.three.timeFrame"),
              stripeId: "price_1O2LEPI5XtUC28eOxPBereAb",
            },
          ],
        },
        {
          title: "Hotel Terra",
          rentalOptions: [
            {
              id: 1,
              name: t("rentalOptions.one.name"),
              timeFrame: t("rentalOptions.one.timeFrame"),
              stripeId: "price_1O2LS7I5XtUC28eO3qUmTLTE",
            },
            {
              id: 2,
              name: t("rentalOptions.two.name"),
              timeFrame: t("rentalOptions.two.timeFrame"),
              stripeId: "price_1O2LS7I5XtUC28eOrjE59qSd",
            },
            {
              id: 3,
              name: t("rentalOptions.three.name"),
              timeFrame: t("rentalOptions.three.timeFrame"),
              stripeId: "price_1O2LS7I5XtUC28eOzfUIvC2g",
            },
          ],
        },
        {
          title: "Hotel Swiss Moraira",
          rentalOptions: [
            {
              id: 1,
              name: t("rentalOptions.one.name"),
              timeFrame: t("rentalOptions.one.timeFrame"),
              stripeId: "price_1Nuw8mI5XtUC28eOEj5rsi9A",
            },
            {
              id: 2,
              name: t("rentalOptions.two.name"),
              timeFrame: t("rentalOptions.two.timeFrame"),
              stripeId: "price_1NuwAZI5XtUC28eOSDLp3rSL",
            },
            {
              id: 3,
              name: t("rentalOptions.three.name"),
              timeFrame: t("rentalOptions.three.timeFrame"),
              stripeId: "price_1NuwBJI5XtUC28eOsGGJsU3d",
            },
          ],
        },
      ],
      fullName: "",
      address: {
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      },
      passportNumber: "",
      email: "",
      signature: null,
      phoneContact: "",
    },
  });

  const handleBikeSelection = (bike) => {
    setFormData({
      ...formData,
      formSteps: {
        ...formData.formSteps,
        selectedBike: bike,
      },
    });
  };

  const handleNextStep = () => {
    if (formData.formSteps.selectedBike) {
      setFormData({
        ...formData,
        formSteps: {
          ...formData.formSteps,
          step: formData.formSteps.step + 1,
        },
      });
    } else {
      alert("Please select a bike before proceeding.");
    }
  };

  const handleStep2Submit = (selectedOption) => {
    setFormData({
      ...formData,
      formSteps: {
        ...formData.formSteps,
        // Update selectedRentalOption
        selectedRentalOption: selectedOption.name,
        // Update selectedRentalOptionStripeId
        selectedRentalOptionStripeId: selectedOption.stripeId,
        step: formData.formSteps.step + 1,
      },
    });
  };

  const handlePreviousStep = () => {
    if (formData.formSteps.step > 1) {
      setFormData({
        ...formData,
        formSteps: {
          ...formData.formSteps,
          step: formData.formSteps.step - 1,
        },
      });
    }
  };

  const selectedHotel = formData.formSteps.hotel.find(
    (hotel) => hotel.title === formData.formSteps.selectedBike
  );

  // Define individual state variables for each input field
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });
  const [passportNumber, setPassportNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneContact, setPhoneContact] = useState("");

  // Function to handle changes in the Full Name input
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  // Function to handle changes in the Address input
  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle changes in the Passport Number input
  const handlePassportNumberChange = (e) => {
    setPassportNumber(e.target.value);
  };

  // Function to handle changes in the Email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle changes in the Phone Contact input
  const handlePhoneContactChange = (e) => {
    setPhoneContact(e.target.value);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();

    if (
      fullName &&
      address.address &&
      address.city &&
      address.state &&
      address.country &&
      address.postalCode &&
      passportNumber &&
      email &&
      phoneContact
    ) {
      // Update the state with user input data
      setFormData({
        ...formData,
        formSteps: {
          ...formData.formSteps,
          fullName: fullName,
          address: {
            ...address,
          },
          passportNumber: passportNumber,
          email: email,
          phoneContact: phoneContact,
        },
      });

      // Move to step 4
      setFormData({
        ...formData,
        formSteps: {
          ...formData.formSteps,
          step: 4,
        },
      });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  // Stripe
  const apiEnv = import.meta.env.VITE_STRIPE_KEY;
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // Dynamically determine the selected rental option's stripeId
  const selectedRentalOption = selectedHotel?.rentalOptions.find(
    (option) => option.name === formData.formSteps.selectedRentalOption
  );

  console.log(selectedRentalOption?.stripeId);

  const item = {
    price: selectedRentalOption?.stripeId, // Use the selected rental option's stripeId
    quantity: 1,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const queryParams = new URLSearchParams();

    // Append all form values to the query parameters
    queryParams.append("fullName", fullName);
    queryParams.append("address", JSON.stringify(address));
    queryParams.append("passportNumber", passportNumber);
    queryParams.append("email", email);
    queryParams.append("phoneContact", phoneContact);
    queryParams.append("selectedBike", formData.formSteps.selectedBike);
    queryParams.append(
      "selectedRentalOption",
      formData.formSteps.selectedRentalOption
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [item],
      mode: "payment",
      // successUrl: `${window.location.origin}/success`,
      //successUrl: `${window.location.origin}/success?${queryParams.toString()}`,
      successUrl: `${
        window.location.origin
      }/success?session_id={CHECKOUT_SESSION_ID}&${queryParams.toString()}`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: email,
    });

    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  //POP UP DATA
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  // TC & Pay Button  Logic
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  return (
    <div>
      {formData.formSteps.step === 1 && (
        <>
          <div className="bg-slate-900 rounded-t">
            <h2 className="text-white p-4">{t("rentPage.stepOne.title")}</h2>
          </div>
          <div className="flex items-center flex-col py-6 px-8">
            <select
              value={formData.formSteps.selectedBike}
              onChange={(e) => handleBikeSelection(e.target.value)}
              className="w-full p-3 rounded block my-8 border border-blue-500 text-black"
            >
              <option>Select a hotel</option>
              {formData.formSteps.hotel.map((bike) => (
                <option key={bike.title} value={bike.title}>
                  {bike.title}
                </option>
              ))}
            </select>
            <button
              // className="bg-slate-900 w-1/2 p-2 text-white rounded"
              className={`bg-slate-900 w-full p-2 text-white rounded ${
                !formData.formSteps.selectedBike
                  ? "opacity-20 pointer-events-none"
                  : ""
              }`}
              onClick={handleNextStep}
              disabled={!formData.formSteps.selectedBike}
            >
              {t("rentPage.stepOne.button")}
            </button>
            <Link to="/">
              <button className="text-slate-800 hover:underline cursor-pointer my-8">
                {t("successPage.rentAnotherButton")}
              </button>
            </Link>
          </div>
        </>
      )}

      {formData.formSteps.step === 2 && selectedHotel && (
        <>
          <div className="bg-slate-900 rounded-t">
            <h2 className="text-white p-4">{t("rentPage.stepTwo.title")}</h2>
          </div>
          <div className="p-4 overflow-auto h-96">
            <div>
              {selectedHotel.rentalOptions.map((option) => (
                <div
                  key={option.id}
                  className="border rounded p-4 my-8 hover:shadow-md hover:bg-gray-100 hover:border-gray-200 transition duration-300 ease-in-out"
                >
                  <h3>{option.name}</h3>
                  <p>{option.timeFrame}</p>
                  <button
                    className="bg-slate-900 w-1/2 rounded p-2 mt-8 mb-4 text-white cursor-pointer"
                    onClick={() => handleStep2Submit(option)}
                  >
                    {t("rentPage.stepTwo.buttonNext")}
                  </button>
                </div>
              ))}
            </div>
            <button
              className="text-slate-800 hover:underline cursor-pointer my-2"
              onClick={handlePreviousStep}
            >
              {t("rentPage.stepTwo.buttonPrevious")}
            </button>
          </div>
        </>
      )}

      {formData.formSteps.step === 3 && (
        <>
          <div className="bg-slate-900 rounded-t">
            <h2 className="text-white p-4">{t("rentPage.stepThree.title")}</h2>
          </div>

          <div className="p-6 text-slate-800 font-llight overflow-auto h-96 shadow-inner shadow-black">
            {" "}
            <form onSubmit={handleStep3Submit}>
              <label className="flex flex-col items-start font-light text-sm my-2">
                {t("rentPage.stepThree.name")}
                <input
                  className="w-full mt-2 rounded p-1.5  border border-slate-400"
                  type="text"
                  name="fullName"
                  required
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </label>
              <label className="flex flex-col items-start font-light text-sm mt-4 mb-8">
                {t("rentPage.stepThree.email")}
                <input
                  className="w-full mt-2 rounded p-1.5 border border-slate-400"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <div className="flex flex-wrap justify-between">
                <label className="flex flex-col items-start font-light text-sm my-2 w-2/3">
                  {t("rentPage.stepThree.address")}
                  <input
                    className="w-full mt-2 rounded p-1.5 border border-slate-400"
                    type="text"
                    name="address"
                    required
                    value={address.address}
                    onChange={handleAddressChange}
                  />
                </label>
                <label className="flex flex-col items-start font-light text-sm my-2 w-1/4">
                  {t("rentPage.stepThree.zip")}
                  <input
                    className="w-full mt-2 rounded p-1.5 border border-slate-400"
                    type="text"
                    name="postalCode"
                    required
                    value={address.postalCode}
                    onChange={handleAddressChange}
                  />
                </label>
              </div>
              <div className="flex flex-wrap justify-between">
                <label className="flex flex-col items-start font-light text-sm my-2 w-2/3">
                  {t("rentPage.stepThree.city")}
                  <input
                    className="w-full mt-2 rounded p-1.5 border border-slate-400"
                    type="text"
                    name="city"
                    required
                    value={address.city}
                    onChange={handleAddressChange}
                  />
                </label>
                <label className="flex flex-col items-start font-light text-sm my-2 w-1/4">
                  {t("rentPage.stepThree.state")}
                  <input
                    className="w-full mt-2 rounded p-1.5 border border-slate-400"
                    type="text"
                    name="state"
                    required
                    value={address.state}
                    onChange={handleAddressChange}
                  />
                </label>
              </div>

              <label className="flex flex-col items-start font-light text-sm mt-4 mb-4">
                {t("rentPage.stepThree.country")}
                <input
                  className="w-full mt-2 rounded p-1.5 border border-slate-400"
                  type="text"
                  name="country"
                  required
                  value={address.country}
                  onChange={handleAddressChange}
                />
              </label>

              <label className="flex flex-col items-start font-light text-sm my-2 mb-6">
                {t("rentPage.stepThree.passport")}
                <input
                  className="w-full mt-2 rounded p-1.5 border border-slate-400"
                  type="text"
                  name="passportNumber"
                  required
                  value={passportNumber}
                  onChange={handlePassportNumberChange}
                />
              </label>

              <label className="flex flex-col items-start font-light text-sm my-2 mb-4">
                {t("rentPage.stepThree.phone")}
                <input
                  className="w-full mt-2 rounded p-1.5 border border-slate-400"
                  type="tel"
                  name="phoneContact"
                  required
                  value={phoneContact}
                  onChange={handlePhoneContactChange}
                />
              </label>
              <button
                className="bg-slate-900 w-full rounded p-2 mt-8 mb-4 text-white cursor-pointer"
                type="submit"
              >
                {t("rentPage.stepThree.buttonNext")}
              </button>
            </form>
          </div>

          <button
            className="text-slate-800 hover:underline cursor-pointer my-8"
            onClick={handlePreviousStep}
          >
            {t("rentPage.stepThree.buttonPrevious")}
          </button>
        </>
      )}
      {formData.formSteps.step === 4 && (
        <>
          <div className="bg-slate-900 rounded-t">
            <h2 className="text-white p-4">{t("rentPage.stepFour.title")}</h2>
          </div>
          <div className=" px-8 md:px-16 py-8">
            <div className="flex flex-wrap justify-between mb-4">
              <p className="text-left font-bold mb-2">
                {t("rentPage.stepFour.data.hotel")}
                <span className="block font-light">
                  {formData.formSteps.selectedBike}
                </span>
              </p>
              <p className="text-left font-bold mb-2">
                {t("rentPage.stepFour.data.option")}
                <span className="block font-light">
                  {formData.formSteps.selectedRentalOption}
                </span>
              </p>
            </div>

            <p className="text-left font-bold mb-2">
              {t("rentPage.stepFour.data.name")}
              <span className="block font-light"> {fullName}</span>
            </p>
            <p className="text-left font-bold mb-2">
              {t("rentPage.stepFour.data.passport")}
              <span className="block font-light"> {passportNumber}</span>
            </p>
            <p className="text-left font-bold mb-2">
              {t("rentPage.stepFour.data.email")}{" "}
              <span className="block font-light"> {email}</span>
            </p>
            <p className="text-left font-bold mb-2">
              {t("rentPage.stepFour.data.phone")}
              <span className="block font-light"> {phoneContact}</span>
            </p>
            <p className="text-left font-bold mb-2">
              {t("rentPage.stepFour.data.address")}
              <span className="block font-light">
                {address.address}, {address.city}, {address.state},{" "}
                {address.postalCode}, {address.country}
              </span>
            </p>
            <div class="flex items-center mb-4">
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="checkbox-1"
                className="text-sm ml-3 font-medium text-gray-900 text-left"
              >
                I agree to Panot's{" "}
                <a onClick={openPopup} class="text-blue-600 hover:underline ">
                  terms and conditions
                </a>
              </label>
              {open ? <Popup closePopup={closePopup} /> : null}
            </div>
            <div className="flex flex-col">
              <button
                onClick={redirectToCheckout}
                // disabled={isLoading && isChecked}
                disabled={isChecked && isLoading}
                className={`bg-slate-900 w-full p-2 text-white rounded ${
                  !isChecked ? "opacity-20 pointer-events-none" : ""
                }`}
              >
                <p>
                  {isLoading
                    ? t("rentPage.stepFour.buttonLoading")
                    : t("rentPage.stepFour.buttonPay")}
                </p>
              </button>
              <button
                className="w-full p-2 hover:underline"
                onClick={handlePreviousStep}
              >
                {t("rentPage.stepFour.buttonPrevious")}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
