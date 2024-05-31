import SelectComp from "@utils/select";
import { NavLink } from "react-router-dom";

export default function InnerNavBar() {

  const options = [
    { value: '/home', label: 'Bolt Ride-Share' },
    { value: '/home/lagride', label: 'lagride' },
    { value: '/home/rida', label: 'rida' },
    { value: '/home/shuttler', label: 'shuttler' },
    { value: '/home/uber', label: 'uber' }
  ]
  return (
    <>
      <div className="flex items-center 2xl:gap-32 xl:gap-32 lg:gap-[64px] mmd:hidden ">
        <div>
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Bolt Ride-Share
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/lagride"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Lagride
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/rida"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2]  font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Rida
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/shuttler"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Shuttlers
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/uber"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Uber
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden" >
      <SelectComp options={options}/>
      </div>
    </>
  );
}
