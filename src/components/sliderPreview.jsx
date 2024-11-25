import { useTranslation, Trans } from "react-i18next";

export default function SliderPrev() {
  const { i18n } = useTranslation();
  return (
    <div className="bg-slate-950 flex flex-col justify-around items-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-20">
        <Trans i18nKey="sliderprew.slidertext"></Trans>
      </h1>
    </div>
  );
}
