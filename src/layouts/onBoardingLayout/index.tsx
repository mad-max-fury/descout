import { Typography } from "@utils/typography";
import Arry from "@assets/arry";
import { Button } from "@utils/button";
import { useNavigate } from "react-router-dom";

export default function OnboardingLayout() {
    const navigate =useNavigate();
    const routeLogin =()=> navigate("/login");
    const routeRegister =()=> navigate("/register");
  return (
    <div className="bg-black bg-custom-image bg-cover bg-center h-screen  text-white flex flex-col items-center justify-center lg:px-[30px] md:px-[20px] msm:px-[20px] msm:block ">
      <div className="max-w-[1116px] mx-auto bg-[#141414] min-h-[780px]  px-[48px] msm:px-[24px] py-[32px] msm:px-[16px] flex flex-col gap-8 msm:h-full">
        <div className="flex flex-col gap-4">
          <Typography variant="h3" fontWeight="bold" font="CabinetGrotesk" customClassName="mxxs:text-h-1">
            Welcome to Descout
          </Typography>
          <div className="max-w-[605px]">
            <Typography
              variant="body-r"
              fontWeight="medium"
              font="CabinetGrotesk"
              color="star5"
            >
              We are connected with the top ride-hailing companies in africa.
              Some of these companies include: Bolt, LagRide, Rider, Shuttlers,
              Uber and many more.
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-6 py-4 msm:flex-col">
          <Button
            children="Create an account"
            rightIcon={<Arry />}
            color="white"
            size="medium"
            customClassName="bg-[#654EF2] "
            fontWeight="medium"
            onClick={routeRegister}
          />
          <Button
            children="Login to your account"
            rightIcon={<Arry />}
            color="star5"
            size="medium"
            customClassName="bg-[#141414] border border-[#5C5C5C]"
            fontWeight="medium"
            onClick={routeLogin}
          />
        </div>
        <div className="bg-cata-image ">
          <img src="/shabala.svg" className="z-0" />
        </div>
      </div>
    </div>
  );
}
