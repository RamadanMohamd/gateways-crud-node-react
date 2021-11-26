import React from "react";

export const Header = ({ actionHandler, buttonTitle, title}) => {

  return (
    <div className="w-full  bg-blue-300">
    <div className="w-11/12 mx-auto py-4 px-6 flex flex-row items-center justify-between">
      {title}
      <button
        className="px-4 py-2 bg-white border roounded"
        onClick={() => actionHandler()}
      >
        {" "}
        {buttonTitle}
      </button>
    </div>
    </div>
  );
};
export default Header;
