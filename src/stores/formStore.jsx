import { create } from "zustand";

export const formStore = create((set) => ({
  formSteps: {
    step: 1,
    selectedCity: "",
    selectedBike: null,
    bikeOptions: {
      costBlanca: [
        {
          title: "Hotel Marriot",
          marriot: [
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
          title: "Hotel Daniya",
          daniya: [
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
          title: "Hotel Terra",
          terra: [
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
          title: "Hotel Swiss Moraira",
          swissMoraira: [
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
    },
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
  setSelectedBike: (selectedBike) =>
    set((state) => ({
      formSteps: {
        ...state.formSteps,
        selectedBike,
      },
    })),
}));
