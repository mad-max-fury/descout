
import Settings from "@assets/settings";
import Bell from "@assets/bell";
import { Typography } from "@utils/typography";
import Shape from "@assets/shape";
import { NavLink } from "react-router-dom";

type mobileNavProps ={
    setNavState: () => void;
}

export default function MobileNav(props:mobileNavProps) {
    const{setNavState} = props;
  return (
    <div className="flex flex-col gap-8 items-center bg-[#000000] py-10">
      <div onClick={setNavState}>
        <NavLink
          to={"connectApi"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-medium bg-[#1A1A1A] px-[8px] py-[12px]"
              : "text-star-dust-500 font-medium "
          }
        >
          Connect API
        </NavLink>
      </div>
      <div onClick={setNavState}>
        <NavLink
          to={"update"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-medium bg-[#1A1A1A] px-[8px] py-[12px]"
              : "text-star-dust-500 font-medium "
          }
        >
          Update Company Profile
        </NavLink>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div>
            <Settings />
          </div>
          <div>
            <Bell />
          </div>
          <div>
            <div className="flex items-center justify-evenly border-l gap-2 px-2">
              <Shape />
              <p>
                <Typography
                  variant="body-s"
                  color="star5"
                  fontWeight="medium"
                  font="CabinetGrotesk"
                >
                  userName
                </Typography>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
