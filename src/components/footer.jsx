import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {

const { i18n } = useTranslation();

  return (
    <div>
      <div className="bg-slate-950 py-24 sm:py-32 justify-around items-center flex basis-1/3 shadow-custom-white">
        <div className="">
          <h3 className="text-slate-50">
            <Trans i18nKey="footer.title"></Trans>
          </h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-slate-50 hover:text-blue-500"
                size={24}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-slate-50 hover:text-blue-400"
                size={24}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-slate-50 hover:text-pink-500"
                size={24}
              />
            </a>
          </div>
        </div>
        <ul className="text-slate-50  pb-1">
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li1"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li2"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li3"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li4"></Trans>
          </li>
        </ul>
        <ul className="text-slate-50 pb-1">
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li5"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li6"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li7"></Trans>
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <Trans i18nKey="footer.li8"></Trans>
          </li>
        </ul>
      </div>
      <div className="bg-slate-950">
        <p className="text-slate-50 pl-7">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
