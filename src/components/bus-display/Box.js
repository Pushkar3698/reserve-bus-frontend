import React from "react";

const Box = ({ name, text, text2, text3, search }) => {
  return (
    <div className="box">
      <div className="box-heading">
        <p style={{ fontWeight: "700" }}>{name}</p>
      </div>
      {search && (
        <div className="search-bar">
          <input type="text" name="" id="" />
        </div>
      )}
      <div className="input-checkbox">
        <input type="checkbox" name="morning" id="" />
        <label htmlFor="">{text}</label>
      </div>
      <div className="input-checkbox">
        <input type="checkbox" name="afternoon" id="" />
        <label htmlFor="">{text2}</label>
      </div>
      <div className="input-checkbox">
        <input type="checkbox" name="evening" id="" />
        <label htmlFor="">{text3}</label>
      </div>
    </div>
  );
};

export default Box;
