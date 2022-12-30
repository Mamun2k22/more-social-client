import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { LeftSide } from "../components/common/LeftSide";
import RightSide from "../components/common/RightSide";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto ">
        <div className="flex justify-between gap-8">
          <div className="left-side-nav w-1/5 rounded-lg bg-white pb-96">
            <LeftSide />
          </div>
          <div className="middle-nav w-1/2 bg-white pb-96 rounded-t-lg">
            <Outlet></Outlet>
              <Footer></Footer>
          </div>
          <div className="right-side-nav bg-white pb-96 rounded-lg">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
