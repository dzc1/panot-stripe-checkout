import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Home = () => {
  const { t, i18n } = useTranslation();
  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
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
        <div className="h-full flex items-center">
          <div className="md:max-w-2xl text-center mx-auto p-10 animate__animated animate__fadeIn">
            <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-white">
              {t("homepage.language")}
            </span>
            {/* Dropdown for language selection */}
            <div className="mb-4">
              <select
                className="w-1/3 p-2 rounded-lg"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
              <span className="block mb-4"> {t("homepage.heading")}</span>
              <img className="inline" src="/panot-white.webp" alt="" />
            </h1>
            <p className="mb-8 text-xl font-light text-white">
              {t("homepage.sub-heading")}
            </p>
            <div className="max-w-lg mx-auto">
              <div className="flex justify-center">
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-center -m-2">
                    <div className="w-full p-2">
                      <Link
                        className="block w-full px-8 py-3 text-lg text-center text-white bg-slate-900 hover:bg-slate-600 focus:ring-4 focus:ring-blue-200 rounded"
                        to="/rent"
                      >
                        {t("homepage.button")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
