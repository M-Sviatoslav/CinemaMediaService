import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function Registration() {

  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);

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
          <button
            onClick={() => setOpen(true)}
            className="px-5 py-3 bg-indigo-800 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Trans i18nKey="registration.Btn"></Trans>
          </button>
          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                  <div className="bg-slate-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-slate-50"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm focus:outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-600 bg-gray-800 text-indigo-600"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm/6 font-medium text-slate-50"
                            >
                              Password
                            </label>
                            <div className="text-sm">
                              <a
                                href="#"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                              >
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              required
                              autoComplete="current-password"
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm focus:outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-600 bg-gray-800 text-indigo-600"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>

                      <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{" "}
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Start a 14 day free trial
                        </a>
                      </p>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
