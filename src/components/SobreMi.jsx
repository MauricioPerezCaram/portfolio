import { useTranslation } from "react-i18next";

const SobreMi = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="sobremi" className="contenedor">
      <h2 className="titulos">{t("sobremi.titulo")}</h2>
      <h5>{t("sobremi.p1")}</h5>
      <h5>{t("sobremi.p2")}</h5>
      <h5>{t("sobremi.p3")}</h5>
    </div>
  );
};

export default SobreMi;
