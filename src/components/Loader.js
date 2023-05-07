import React from "react";
import spinner from "../gif/Spinner.gif";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={spinner} alt="loading" />
    </div>
  );
};

const BarsLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export { Loader, BarsLoader };
