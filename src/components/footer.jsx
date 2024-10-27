import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="bg-slate-950 py-24 sm:py-32 justify-around items-center flex basis-1/3 shadow-custom-white">
        <div className="">
          <h3 className="text-slate-50">
            Making the world a better place through<br></br> constructing
            elegant hierarchies.
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
            Marketing
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Blog
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Commerce
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Insights
          </li>
        </ul>
        <ul className="text-slate-50 pb-1">
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Privacy
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Documentation
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            Guides
          </li>
          <li className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            About
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
