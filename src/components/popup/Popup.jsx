import "./Popup.css";
import { useTranslation } from "react-i18next";
export const Popup = ({ closePopup }) => {
  const { t } = useTranslation();
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1 className="font-bold mb-4">Panots Terms & Conditions</h1>
        <div className="text-left">
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.one")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.two")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.three")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.four")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.five")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.six")}{" "}
          </p>
          <p className="text-sm md:text-md mb-2">
            {t("successPage.data.consent.seven")}{" "}
          </p>
        </div>

        <button
          className="bg-slate-900 w-1/2 rounded mt-2 p-2 text-white cursor-pointer"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};
