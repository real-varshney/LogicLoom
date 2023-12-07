import React from "react";

const Footer = () => {
  return (
    <div className="pb-20 pt-24 bg_foot" id="footer">
      <div className="flex flex-row w-full justify-around">
        <div className="w-1/3">
          <h1 className="text-5xl font-bold text-gray-950 text-opacity-75">
            We love <span className="text-blue-400 ">debates</span> and
            the <span className="text-orange-400">people</span> who
            rebuttal.
          </h1>
        </div>
        <div className="w-1/3 flex flex-row">
          <div className="flex flex-col p-4 pr-8">
            <span className="text-lg pb-2 font-medium text-gray-500">
              COMMUNITY
            </span>
            <span className="text-lg pb-2">Organize a debate</span>
            <span className="text-lg pb-2">Explore debate</span>
            <span className="text-lg pb-2">Code of Conduct</span>
            <span className="text-lg pb-2">Brand Assets</span>
          </div>
          <div className="flex flex-col p-4 pr-8">
            <span className="text-lg pb-2 font-medium text-gray-500">
              ORGANISATION
            </span>
            <span className="text-lg pb-2">About</span>
            <span className="text-lg pb-2">Blog</span>
            <span className="text-lg pb-2">Learn</span>
            <span className="text-lg pb-2">Privacy</span>
            <span className="text-lg pb-2">Terms</span>
          </div>
          <div className="flex flex-col p-4">
            <span className="text-lg pb-2 font-medium text-gray-500">
              SUPPORT
            </span>
            <span className="text-lg pb-2">Help</span>
            <span className="text-lg pb-2">Refund Policy</span>
            <span className="text-lg pb-2">Status</span>
            <span className="text-lg pb-2">Contact us</span>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "1px",
          background: "black",
          width: "90vw",
          display: "flex",
          margin: "auto",
          marginTop: "30px",
        }}
      ></div>
      <div className="flex w-full" style={{paddingInline:'8rem', paddingBlock: "2rem"}}>
        <div className="w-1/3">
          <h1 className="text-3xl font-bold text-blue-700">LogicLoom</h1>
        </div>
        <div className="w-3/4 text-sm text-gray-600">
          Built at ABES Engineering College, Made with 💖 React.js and a bunch
          of other libraries that help making beautiful things on the internet
          possible. We are forever in your debt.
        </div>
      </div>
      <span className="text-lg" style={{paddingInline:'8rem', paddingBlock: "2rem"}}>

      ©2023
      </span>
    </div>
  );
};

export default Footer;
