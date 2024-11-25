import { useTranslation, Trans } from "react-i18next";

export default function Registration() {

  const { i18n } = useTranslation();

  return (
    <div className="bg-slate-950">
      <div className="bg-slate-950 flex flex-col justify-around items-center pb-32 pt-10">
        <div className="mb-4">
          <h3 className="text-slate-50 text-center text-lg">
            <Trans i18nKey="registration.Title"></Trans>
          </h3>
        </div>
        <div className="flex space-x-2">
          <input
            className="px-4 py-3 w-80 border border-indigo-600 rounded-md shadow-sm focus:outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-600 bg-gray-800 text-indigo-600"
            type="email"
            placeholder="Email Address"
          />
          <button className="px-5 py-3 bg-indigo-800 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <Trans i18nKey="registration.Btn"></Trans>
          </button>
        </div>
      </div>
    </div>
  );
}
