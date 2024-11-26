import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";


export default function SignInBtn() {

const [open, setOpen] = useState(false);

  return (
    <div className="ml-1.5">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex justify-center gap-x-1.5 rounded-md bg-transparent hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
      >
        Sign In
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
  );
}
