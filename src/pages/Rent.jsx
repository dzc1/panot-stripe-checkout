import { Link } from "react-router-dom";
import { Form } from "../components/Form";
import { useTranslation } from "react-i18next";

export const Rent = () => {
  const { t, i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
          <div className="h-full flex items-center ">
            <div className="bg-white rounded-lg text-center mx-auto p-10 w-1/2 h-1/2 animate__animated animate__fadeIn">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
