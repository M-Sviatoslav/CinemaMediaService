import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";



export default function HeaderLangSelector() {



  const { i18n } = useTranslation();

  const handleMenuItemClick = (lng) => {
      i18n.changeLanguage(lng);

    };


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
          <Trans i18nKey="languageSelector"></Trans>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-white"
          />
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 mt-2 min-w-full origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => handleMenuItemClick("pl")}
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-indigo-100 text-black" : "text-black"
                }`}
              >
                Polski
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => handleMenuItemClick("en")}
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-indigo-100 text-black" : "text-black"
                }`}
              >
                English
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
