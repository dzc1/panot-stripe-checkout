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
            backgroundImage: 'url("src/imgs/background-min.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full flex items-center">
            <div className="md:max-w-2xl text-center mx-auto p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
