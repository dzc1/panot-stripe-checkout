import { useState, useEffect } from "react";
import { formStore } from "../stores/formStore";

export const Form = () => {
  // Create a local state variable "localStep" with an initial value of 1
  const [localStep, setLocalStep] = useState(1);
  // Store the selected hotel title
  const [selectedHotel, setSelectedHotel] = useState("");

  // Access the formSteps value from the store
  const { step, bikeOptions, setSelectedBike } = formStore().formSteps;

  // Update the localStep state when the step from the store changes
  useEffect(() => {
    setLocalStep(step);
  }, [step]);

  // Function to go to the previous step
  const goToPreviousStep = () => {
    if (localStep > 1) {
      setLocalStep(localStep - 1);
    }
  };

  // Function to go to the next step
  const goToNextStep = () => {
    if (localStep < 3) {
      setLocalStep(localStep + 1);
    }
  };

  // Handle the change of selected hotel
  const handleHotelChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedHotel(selectedTitle);

    // Update the selectedBike in the store
    formStore().setSelectedBike(selectedTitle);
  };

  // Get the selected hotel object from bikeOptions
  const selectedHotelObject = bikeOptions.costBlanca.find(
    (hotel) => hotel.title === selectedHotel
  );

  return (
    <>
      <h2 className="text-white">FORM INPUTS</h2>
      <p className="text-white">Current Step: {localStep}</p>

      {localStep === 2 && (
        <>
          <h3 className="text-white">Step 2 - HOTEL CHOICE</h3>
          <p className="text-white">This is the information for step 2.</p>

          {/* Dropdown to select a hotel */}
          <label htmlFor="hotelSelect" className="text-white">
            Choose a Hotel:
          </label>
          <select
            id="hotelSelect"
            onChange={handleHotelChange}
            value={selectedHotel}
          >
            <option value="">Select a Hotel</option>
            {bikeOptions.costBlanca.map((hotel) => (
              <option key={hotel.title} value={hotel.title}>
                {hotel.title}
              </option>
            ))}
          </select>

          {/* Display the selected hotel information */}
          {selectedHotelObject && (
            <>
              <h1>{selectedHotelObject.title}</h1>
              <p>{selectedHotelObject.timeFrame}</p>
              {/* Add other information here */}
            </>
          )}
        </>
      )}

      {localStep === 3 && (
        <>
          <h3 className="text-white">Step 3 Information</h3>
          <p className="text-white">This is the information for step 3.</p>
          {/* Add any additional content specific to step 3 */}
        </>
      )}

      <div>
        <button
          onClick={goToPreviousStep}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          disabled={localStep === 1}
        >
          Previous
        </button>

        <button
          onClick={goToNextStep}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={localStep === 3}
        >
          Next
        </button>
      </div>
    </>
  );
};
