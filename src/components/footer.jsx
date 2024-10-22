export default function Footer(){
  return (
    <div>
      <div className="bg-slate-800 py-24 sm:py-32 justify-around items-center flex basis-1/3">
        <div className="">
          <h3 className="text-slate-50">
            Making the world a better place through constructing elegant
            hierarchies.
          </h3>
        </div>
        <ul className="text-slate-50 pb-1">
          <li>Marketing</li>
          <li>Blog</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
        <ul className="text-slate-50 pb-1">
          <li>Privacy</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>About</li>
        </ul>
      </div>
      <div className="bg-slate-800">
        <p className="text-slate-50 pl-7">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}