import { PerformComp } from "@utils/performcomp";
import Warning from "@assets/warning";
import Sprinkles from "@assets/sprinkles";
import Chart from "@assets/chart";
import { Typography } from "@utils/typography";
import secondcolumns from "@utils/table/secondTableColumn";
import SideContainer from "@utils/sidecontainer";
import Car from "@assets/car";
import Circlezero from "@assets/circleZero";
import Article from "@assets/article";
import SelectAll from "@assets/selectall";
import { Button } from "@utils/button";
import ArrowDown from "@assets/arrowdown";
import Review from "@utils/review";
import ReviewIcon from "@assets/reviewicon";
import SecondTableComp from "@utils/table/secondReactTable";
import { DriverDataProps } from "@api/mainAppContext/index.types";
import useLocalStorage from "@hooks/useLocalStorage";
export default function First() {
  const initialDriverData:DriverDataProps[] =[];
  const[storedValue] = useLocalStorage("storedDriverInfo", initialDriverData)
  const ridesArray = storedValue?.map((value) => value.ridesInfo);
  const MainRideArray = ridesArray[0];
  const ride = MainRideArray?.find((item) => item?.name === 'Bolt Ride-Share');
  const rideTable = ride?.dvi;
  const RidaReviews = ride?.reviews;

  console.log(storedValue,"this is stored value")
  const getColor = (amount: number | undefined): string => {
    if (amount === undefined) return "#0E9F6E"; // default color if amount is undefined
    if (amount >= 0 && amount <= 1) return "green";
    if (amount >= 2 && amount <= 5) return "#a68b02";
    if (amount >= 6) return "red";
    return "#0E9F6E"; // default color if none of the conditions match
  };
  return (
    <div className="py-[20px] pl-[20px] pr-[40px] flex flex-col gap-12 mxxxs:p-[24px]">
    <div className="flex mmd:flex-col">
      <div className="flex-grow xl:w-1/3">
        <PerformComp
          header="Discplinary Issue(s)"
          icon={<Warning />}
          text={ride?.disciplinaryIssue?.comment}
          count={ride?.disciplinaryIssue?.amount}
          color={getColor(ride?.disciplinaryIssue?.amount)}
        />
      </div>
      <div className="flex-grow xl:w-1/3">
        <PerformComp
          header="Ratings"
          icon={<Sprinkles />}
          text="over 5.00"
          count={ride?.ratings}
          color="#0E9F6E"
        />
      </div>
      <div className="flex-grow xl:w-1/3">
        <PerformComp
          header="Trips"
          icon={<Chart />}
          text="trips"
          count={ride?.trips}
          color="#FF5A1F"
        />
      </div>
    </div>
    <div className="">
      <div className="pb-2">
        <Typography
          variant="body-r"
          color="special"
          fontWeight="bold"
          font="CabinetGrotesk"
        >
          Driver and Vehicle Informations
        </Typography>
      </div>
      <div className="flex gap-4 mmd:flex-col">
        <div className="flex-grow">
          <SecondTableComp columns={secondcolumns} data={rideTable} />
        </div>
        <div className="flex flex-col justify-between mmd:gap-4">
          <div className="">
            <SideContainer
              icon={<Circlezero />}
              firstText="Joined since"
              secondText={ride?.dateJoined}
            />
          </div>
          <div>
            <SideContainer
              icon={<Car />}
              firstText="Vehicle Name"
              secondText={ride?.vehicleName}
            />
          </div>
          <div>
            <SideContainer
              icon={<Article />}
              firstText="Model No (VIN)"
              secondText={ride?.modelNo}
            />
          </div>
          <div>
            <SideContainer
              icon={<SelectAll />}
              firstText="License Plate"
              secondText={ride?.licensePlate}
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Typography variant="body-r" fontWeight="bold" color="wood9">
            Reviews:
          </Typography>
          <Typography fontWeight="regular" color="wood5">
            {ride?.reviews?.length} Reviews
          </Typography>
        </div>
        <div>
          <Button rightIcon={<ArrowDown />} children="Show all" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[250px] mmd:max-h-[405px]">
      {RidaReviews?.map((review)=>(
            <Review
            text1={review.review}
            text2={review.timestamp}
            icon={<ReviewIcon />}
          />
          ))}
      </div>
    </div>
  </div> 
  );
}
