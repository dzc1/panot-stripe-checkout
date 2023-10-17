import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PB_KEY);
  }

  return stripePromise;
};

export const FormTwo = () => {
  const [formData, setFormData] = useState({
    formSteps: {
      step: 1,
      selectedBike: null,
      hotel: [
        {
          title: "marriot",
          rentalOptions: [
            {
              id: 1,
              name: "1 Day Rental",
              timeFrame: "Rental Bike for 1 Day - €45 per Day",
              stripeId: "price_1O2LA4I5XtUC28eO0BIRbiM8",
            },
            {
              id: 2,
              name: "3 Day Rental",
              timeFrame:
                "Rental Bike for 3 Days - €38.25 per Day - 15% Discount",
              stripeId: "price_1O2LA4I5XtUC28eORjtI7xJt",
            },
            {
              id: 3,
              name: "5 Day Rental",
              timeFrame: "Rental Bike for 5 Days - €36 per Day - 20% Discount",
              stripeId: "price_1O2LA4I5XtUC28eOLpWfvKhm",
            },
          ],
        },
        {
          title: "daniya",
          rentalOptions: [
            {
              id: 1,
              name: "1 Day Rental",
              timeFrame: "Rental Bike for 1 Day - €45 per Day",
              stripeId: "price_1O2LEPI5XtUC28eO1x6QzSEH",
            },
            {
              id: 2,
              name: "3 Day Rental",
              timeFrame:
                "Rental Bike for 3 Days - €38.25 per Day - 15% Discount",
              stripeId: "price_1O2LEPI5XtUC28eOS23GAKj6",
            },
            {
              id: 3,
              name: "5 Day Rental",
              timeFrame: "Rental Bike for 5 Days - €36 per Day - 20% Discount",
              stripeId: "price_1O2LEPI5XtUC28eOxPBereAb",
            },
          ],
        },
        {
          title: "terra",
          rentalOptions: [
            {
              id: 1,
              name: "1 Day Rental",
              timeFrame: "Rental Bike for 1 Day - €45 per Day",
              paymentLink: "https://pay.panotmobility.com/b/6oEg1i8GOfL5cQE9B3",
              stripeId: "price_1Nuw8mI5XtUC28eOEj5rsi9A",
            },
            {
              id: 2,
              name: "3 Day Rental",
              timeFrame:
                "Rental Bike for 3 Days - €38.25 per Day - 15% Discount",
              paymentLink: "https://pay.panotmobility.com/b/bIY8yQ5uC7ezaIw6oQ",
              stripeId: "price_1NuwAZI5XtUC28eOSDLp3rSL",
            },
            {
              id: 3,
              name: "5 Day Rental",
              timeFrame: "Rental Bike for 5 Days - €36 per Day - 20% Discount",
              paymentLin: "https://pay.panotmobility.com/b/bIY16o0aifL517WaF5",
              stripeId: "price_1NuwBJI5XtUC28eOsGGJsU3d",
            },
          ],
        },
        {
          title: "swissMoraira",
          rentalOptions: [
            {
              id: 1,
              name: "1 Day Rental",
              timeFrame: "Rental Bike for 1 Day - €45 per Day",
              paymentLink: "https://pay.panotmobility.com/b/6oEg1i8GOfL5cQE9B3",
              stripeId: "price_1Nuw8mI5XtUC28eOEj5rsi9A",
            },
            {
              id: 2,
              name: "3 Day Rental",
              timeFrame:
                "Rental Bike for 3 Days - €38.25 per Day - 15% Discount",
              paymentLink: "https://pay.panotmobility.com/b/bIY8yQ5uC7ezaIw6oQ",
              stripeId: "price_1NuwAZI5XtUC28eOSDLp3rSL",
            },
            {
              id: 3,
              name: "5 Day Rental",
              timeFrame: "Rental Bike for 5 Days - €36 per Day - 20% Discount",
              paymentLin: "https://pay.panotmobility.com/b/bIY16o0aifL517WaF5",
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
  console.log(apiEnv);
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // Dynamically determine the selected rental option's stripeId
  // Dynamically determine the selected rental option's stripeId
  const selectedRentalOption = selectedHotel?.rentalOptions.find(
    (option) => option.name === formData.formSteps.selectedRentalOption
  );

  console.log(selectedRentalOption?.stripeId);

  const item = {
    price: selectedRentalOption?.stripeId, // Use the selected rental option's stripeId
    quantity: 1,
  };

  //   const customerNotes = `
  //   Full Name: ${fullName}
  //   Passport Number: ${passportNumber}
  //   Email: ${email}
  //   Phone: ${phoneContact}
  //   Selected Bike: ${formData.formSteps.selectedBike}
  //   Selected City: ${
  //     formData.formSteps.selectedCity ? "Costa Blanca" : "Costa Blanca"
  //   }
  //   Address: ${address.address}
  //   City: ${address.city}
  //   State: ${address.state}
  //   Country: ${address.country}
  //   Postal Code: ${address.postalCode}
  // `;

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
      successUrl: `${window.location.origin}/success?${queryParams.toString()}`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: email,
    });

    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  return (
    <div>
      {formData.formSteps.step === 1 && (
        <div>
          <h2>Step 1: Select a Bike</h2>
          <select
            value={formData.formSteps.selectedBike}
            onChange={(e) => handleBikeSelection(e.target.value)}
          >
            <option>Select a bike</option>
            {formData.formSteps.hotel.map((bike) => (
              <option key={bike.title} value={bike.title}>
                {bike.title}
              </option>
            ))}
          </select>
          <button
            onClick={handleNextStep}
            disabled={!formData.formSteps.selectedBike}
          >
            Next
          </button>
        </div>
      )}

      {formData.formSteps.step === 2 && selectedHotel && (
        <div>
          <h2>Step 2: Choose a Rental Option</h2>
          <div>
            {selectedHotel.rentalOptions.map((option) => (
              <div key={option.id} className="card">
                <h3>{option.name}</h3>
                <p>{option.timeFrame}</p>
                <button onClick={() => handleStep2Submit(option)}>
                  Select
                </button>
              </div>
            ))}
          </div>
          <button onClick={handlePreviousStep}>Previous</button>
        </div>
      )}

      {formData.formSteps.step === 3 && (
        <div>
          <h2>Step 3: Fill out the Form</h2>
          <form onSubmit={handleStep3Submit}>
            <p>{fullName} name</p>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                required
                value={fullName}
                onChange={handleFullNameChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                required
                value={address.address}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                required
                value={address.city}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                name="state"
                required
                value={address.state}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="country"
                required
                value={address.country}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              Postal Code:
              <input
                type="text"
                name="postalCode"
                required
                value={address.postalCode}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              Passport Number:
              <input
                type="text"
                name="passportNumber"
                required
                value={passportNumber}
                onChange={handlePassportNumberChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              Phone Contact:
              <input
                type="tel"
                name="phoneContact"
                required
                value={phoneContact}
                onChange={handlePhoneContactChange}
              />
            </label>
            <button type="submit">Next</button>
          </form>
          <button onClick={handlePreviousStep}>Previous</button>
        </div>
      )}
      {formData.formSteps.step === 4 && (
        <div>
          <h2>Step 4: Summary</h2>
          <p>Selected Bike: {formData.formSteps.selectedBike}</p>
          <p>
            Selected Rental Option: {formData.formSteps.selectedRentalOption}
          </p>
          <p>
            Selected Rental Option StripeId:{" "}
            {formData.formSteps.selectedRentalOptionStripeId}
          </p>
          <p>Full Name: {fullName}</p>
          <p>Address: {address.address}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Country: {address.country}</p>
          <p>Postal Code: {address.postalCode}</p>
          <p>Passport Number: {passportNumber}</p>
          <p>Email: {email}</p>
          <p>Phone Contact: {phoneContact}</p>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={redirectToCheckout} disabled={isLoading}>
            <p>{isLoading ? "Loading..." : "Buy"}</p>
          </button>
        </div>
      )}
    </div>
  );
};
