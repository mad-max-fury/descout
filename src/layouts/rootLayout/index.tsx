import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@components/navBar";
import MobileNav from "@components/mobileNav";
function RootLayout() {
  const [toggleBar , setToggleBar]= useState(false);

  const toggleFunc =()=>{
    setToggleBar((prev)=>!prev)
  }
  return (
    <>
      <div className="w-full relative">
        <div className="px-[48px] py-[35px] bg-[#000000] w-full mmd:px-[24px]">
          <NavBar navState={toggleBar} setNavState={toggleFunc}/>
          <div className="z-10 absolute left-0 right-0">
          {toggleBar && <MobileNav setNavState={toggleFunc}/>}
        </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
