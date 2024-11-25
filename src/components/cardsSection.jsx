import { useTranslation, Trans } from "react-i18next";

export default function Cards() {

const { i18n } = useTranslation();

  return (
    <div class="bg-slate-950">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl bg-slate-950">
          <Trans i18nKey="cardsection.MainTitle"></Trans>
        </h2>
      </div>
      <div class="bg-slate-950 py-24 sm:py-32 flex flex-row justify-around items-center">
        <div class="border-solid rounded-md border-4 border-indigo-600  h-80 w-64 bg-gradient-to-r from-indigo-800 to-indigo-600">
          <h3 class="text-2xl font-bold tracking-tight text-white">
            <Trans i18nKey="cardsection.card1Title"></Trans>
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            <Trans i18nKey="cardsection.card1Text"></Trans>
          </p>
        </div>
        <div class="border-solid rounded-md border-4  border-indigo-600 h-80 w-64 bg-gradient-to-r from-indigo-800 to-indigo-600">
          <h3 class="text-2xl font-bold tracking-tight text-white">
            <Trans i18nKey="cardsection.card2Title"></Trans>
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            <Trans i18nKey="cardsection.card2Text"></Trans>
          </p>
        </div>
        <div class="border-solid rounded-md border-4 border-indigo-600 h-80 w-64 bg-gradient-to-r from-indigo-800 to-indigo-600">
          <h3 class="text-2xl font-bold tracking-tight text-white">
            <Trans i18nKey="cardsection.card3Title"></Trans>
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            <Trans i18nKey="cardsection.card3Text"></Trans>
          </p>
        </div>
        <div class="border-solid rounded-md border-4 border-indigo-600 h-80 w-64 bg-gradient-to-r from-indigo-800 to-indigo-600">
          <h3 class="text-2xl font-bold tracking-tight text-white">
            <Trans i18nKey="cardsection.card4Title"></Trans>
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            <Trans i18nKey="cardsection.card4Text"></Trans>
          </p>
        </div>
      </div>
    </div>
  );
}
