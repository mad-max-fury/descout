import { useEffect, useState } from "react";
import { Typography } from "@utils/typography";
import { Input } from "@utils/input";
import Search from "@assets/search";
import { Button } from "@utils/button";
import NotLoader from "@components/notLoader";
import InnerNavBar from "@components/innerNavBar";
import { Outlet } from "react-router-dom";
import Phone from "@assets/phone";
import Mailopen from "@assets/mailopen";
import Sweet from "@assets/sweet";
import Timer from "@assets/timer";
import Calendar from "@assets/calendar";
import Circlezero from "@assets/circleZero";
import Map from "@assets/map";
import axios, { AxiosError } from "axios";
import { Circles } from "react-loader-spinner";
import { toast} from "react-toastify";
import { useAppContext } from "@api/mainAppContext";
import { FieldErrors, useForm } from "react-hook-form";
import useLocalStorage from "@hooks/useLocalStorage";


type formValueProps = {
  FullName?: string | undefined | null;
  NIN?: number | null | undefined;
};

interface ErrorResponse {
  message: string;

}
function Home() {
  const [isTrue, setIsTrue] = useState(false);
  const[isLoading, setLoading] = useState(false);
  const { getDriverData, driverState } = useAppContext();
  const id = "";
  const formDataStorageArray = useLocalStorage<formValueProps>("formData", { FullName: "", NIN: null });
  const formData = formDataStorageArray[0];
  const setFormData = formDataStorageArray[1];

  const driverStorageArray = useLocalStorage("driverId", id);
  const setdriverId = driverStorageArray[1];
  const {
    register,
    handleSubmit,
    formState: {  isSubmitting },
  } = useForm<formValueProps>({ defaultValues: formData,});

  

 useEffect(()=>{
  if(driverState.length >0){
    setIsTrue(true)
  }
 },[driverState])


 


  const submitter = async (data: formValueProps) => {
    setLoading(true);
    console.log(data, "what is submitted")
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          `https://descout.vercel.app/api/v1/driver/?nin=${data.NIN}&name=${data.FullName}`
        );
        console.log(response, "returned api");
        getDriverData(response?.data?.data);
        setIsTrue(true);
        setLoading(false);
        setFormData(data);
        setdriverId(response?.data?.data?._id);
        toast.success("Driver information fetched successfully!", {
          position: "top-right",
          autoClose: 5000,
        });
      } catch (error) {
        const err = error as AxiosError<ErrorResponse>;
        console.log("err is here", err);

        if (err.response?.status === 404) {
          const errorMessage = err.response.data.message;

          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
          });
          setLoading(false);
        } else {
          toast.error("An error occurred. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
          setLoading(false);
        }
      }
    };

    getUserInfo();
  };

  const onError = (err: FieldErrors<formValueProps>) => {
    console.log("OnError", err);
    if (err.FullName) {
      toast.error(err.FullName.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
    if (err.NIN) {
      toast.error(err.NIN.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };


  const imageSparkles =  <img src="/sparkles.svg" />
  return (
    <>
      <div className="">
        <div className="bg-[#000000] px-[48px]  py-[20px] mmd:px-[24px]">
          <div className="">
            <div className="mb-5">
              <Typography
                variant="h1"
                color="white"
                fontWeight="bold"
                font="CabinetGrotesk"
              >
                Learn about a driver today!
              </Typography>
            </div>
            <div className="max-w-[548px] mmd:w-full mb-5">
              <Typography variant="body-r" color="star5" fontWeight="regular">
                We are connected with the top ride-hailing companies in africa.
                Some of these companies include: Bolt, LagRide, Rider,
                Shuttlers, Uber and many more.
              </Typography>
            </div>
            <form onSubmit={handleSubmit(submitter, onError)} noValidate>
              <div className="flex items-end max-w-[808px] mmd:flex-col mmd:items-start  gap-4">
                <div className="mmd:w-full">
                  <Input
                    name="FullName"
                    label="FullName"
                    placeholder="eg: Jeremiah Folorunso"
                    bgcolor="placeholder:text-star-dust-800 bg-white"
                    labelCustomClassName="text-white"
                    maindiv="flex-grow-3 md:w-[321px] mmd:w-full"
                    errorMsg=""
                    register={register}
                    validationPattern={/^[a-zA-Z'-]{1,50} [a-zA-Z'-]{1,50}$/}
                    message=" please enter your first and second name"
                  />
                </div>
                <div className="mmd:w-full">
                  <Input
                    name="NIN"
                    label="NIN"
                    placeholder="eg: 1122331122"
                    bgcolor="placeholder:text-star-dust-800 bg-white"
                    labelCustomClassName="text-white"
                    maindiv="md:w-[250px] mmd:w-full"
                    errorMsg=""
                    register={register}
                    validationPattern={/^\d{10}$/}
                    message="Nin should be a 10 digit number"
                  />
                </div>
                <div className="mmd:w-full">
                  <Button
                    children="Search For Driver"
                    rightIcon={<Search />}
                    color="white"
                    size="medium"
                    customClassName="bg-[#654EF2] disabled:bg-[#cccc]"
                    fontWeight="medium"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {!isTrue ? (
            <div className="px-[48px] py-[20px] bg-rose mmd:px-0">
              <div className="flex items-center border justify-center h-[623px] bg-[#F6F6F6]">
                <div className="">
                  {" "}
                  {isLoading ? (
                    <Circles
                      height="80"
                      width="80"
                      color="#654EF2"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    <NotLoader />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {isLoading ? (
                <div className="flex items-center border justify-center h-[623px] bg-[#F6F6F6]">
                  <Circles
                    height="80"
                    width="80"
                    color="#654EF2"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                <div className="flex mmd:flex-col">
                  {driverState.map((info) => (
                    <div className="border w-[416px] mmd:w-full p-[46px] mxxxs:p-[24px] bg-[#F6F6F6] flex flex-col gap-6 2xl:p-[48px] xl:p-[40px] lg:p-[20px]">
                      <div className="flex gap-4 mmd:justify-between mmd:w-full">
                        <div className="flex flex-col justify-between gap-4 mmd:w-1/2">
                          <div className="w-full aspect-video overflow-hidden lg:w-[160px]">
                            <img
                              src={info?.bio?.imageUrl}
                              alt="person"
                              className="object-cover rounded-md w-full h-full"
                            />
                          </div>
                          <Typography
                            variant="body-r"
                            color="special"
                            fontWeight="bold"
                          >
                            {info?.bio?.name}
                          </Typography>
                          <Button
                            children={"Call"}
                            leftIcon={<Phone />}
                            size="small"
                            customClassName="border"
                            color="star9"
                            fontWeight="regular"
                          />
                        </div>
                        <div className="flex flex-col gap-4 justify-between mmd:w-1/2">
                          <div className="w-full aspect-video overflow-hidden lg:w-[160px] ">
                            <img
                              src={info?.bio?.carUrl}
                              alt="person"
                              className="object-cover rounded-md w-full h-full"
                            />
                          </div>
                          {/* <Typography
                            variant="body-m"
                            color="special"
                            fontWeight="bold"
                          >
                           
                            {imageSparkles} good rating 
                          </Typography> */}
                            <div className="flex gap-2">
                              {imageSparkles}
                              <p className="text-[#654EF2]">{info?.bio?.rating} rating</p>
                            </div>
                          <Button
                            children={"Email"}
                            leftIcon={<Mailopen />}
                            size="small"
                            customClassName="border"
                            color="star9"
                            fontWeight="regular"
                          />
                        </div>
                      </div>
                      <div className="flex border-y justify-between py-4">
                        <div className="flex flex-col gap-10">
                          <div className="flex items-center gap-2">
                            <Sweet />
                            <Typography
                              variant="body-r"
                              fontWeight="regular"
                              color="special"
                            >
                              Gender
                            </Typography>
                          </div>
                          <div className="flex items-center gap-2">
                            <Timer />
                            <Typography
                              variant="body-r"
                              fontWeight="regular"
                              color="special"
                            >
                              Age
                            </Typography>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar />
                            <Typography
                              variant="body-r"
                              fontWeight="regular"
                              color="special"
                            >
                              Date of Birth
                            </Typography>
                          </div>
                        </div>
                        <div className="flex flex-col gap-10">
                          <div className="flex justify-end">
                            <Typography
                              variant="body-r"
                              color="special"
                              fontWeight="bold"
                              customClassName="mxxs:font-bold"
                            >
                              {info?.bio?.gender}
                            </Typography>
                          </div>
                          <div className="flex justify-end">
                            <Typography
                              variant="body-r"
                              color="special"
                              fontWeight="bold"
                              customClassName="mxxs:font-bold"
                            >
                              {`${info?.bio?.age} years`}
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              variant="body-r"
                              color="special"
                              fontWeight="bold"
                              customClassName="mxxs:font-bold"
                            >
                              {info?.bio?.dob}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Mailopen />
                            <Typography
                              variant="body-r"
                              color="special"
                              font="CabinetGrotesk"
                              fontWeight="regular"
                            >
                              Email Address
                            </Typography>
                          </div>
                          <Typography
                            variant="body-r"
                            color="special"
                            fontWeight="bold"
                            customClassName="mxxs:font-bold"
                          >
                            {info?.bio?.email}
                          </Typography>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Phone />
                            <Typography
                              variant="body-r"
                              color="special"
                              font="CabinetGrotesk"
                              fontWeight="regular"
                            >
                              Phone Number
                            </Typography>
                          </div>
                          <Typography
                            variant="body-r"
                            color="special"
                            fontWeight="bold"
                            customClassName="mxxs:font-bold"
                          >
                            {info?.bio?.number}
                          </Typography>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Circlezero />
                            <Typography
                              variant="body-r"
                              color="special"
                              font="CabinetGrotesk"
                              fontWeight="regular"
                            >
                              National Identification Number
                            </Typography>
                          </div>
                          <Typography
                            variant="body-r"
                            color="special"
                            fontWeight="bold"
                            customClassName="mxxs:font-bold"
                          >
                            {info?.bio?.nin}
                          </Typography>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Map />
                            <Typography
                              variant="body-r"
                              color="special"
                              font="CabinetGrotesk"
                              fontWeight="regular"
                            >
                              Home Address
                            </Typography>
                          </div>
                          <Typography
                            variant="body-r"
                            color="special"
                            fontWeight="bold"
                            customClassName="mxxs:font-bold"
                          >
                            {info?.bio?.address}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border flex-grow">
                    <div className="border-b pt-[48px] pl-[20px] md:pr-[0px] mmd:pr-[40px] mxxxs:pr-[20px]">
                      <InnerNavBar />
                    </div>
                    <div>
                      <Outlet />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
