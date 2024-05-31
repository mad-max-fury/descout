import { useState } from "react";
import { Typography } from "@utils/typography";
import { Input } from "@utils/input";
import { Button } from "@utils/button";
import Arry from "@assets/arry";
import { useNavigate } from "react-router-dom";
import Eye from "@assets/eye";
import EyeSlash from "@assets/eyeSlash";
import { FieldErrors, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";


type formValueProps= {
  companyName?: string;
  emailAddress?: string;
  password?:string;
  reenterPassword?: string
}
export default function Register() {
  const navigate = useNavigate();
  const RouteLogin = () => navigate("/login");
  const [passwordState, setPasswordState] = useState(false);
  const [secondPasswordState, setSecondPasswordState] = useState(false);
  const [loading , setLoading] = useState<boolean>(false);
  const togglePassword = () => setPasswordState((prev) => !prev);
  const toggleSecondPassword = () => setSecondPasswordState((prev) => !prev);

        const formValues:formValueProps={
          companyName: "",
          emailAddress:"",
          password: "",
          reenterPassword:"",
        }
        const schema = yup.object().shape({
          companyName: yup.string().required("Company Name is required"),
          emailAddress: yup.string().email("Invalid email address").required("Email is required"),
          password: yup.string().required("Password is required"),
          reenterPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Re-entering the password is required"),
        });
    const resolver =  yupResolver<formValueProps>(schema);

    const form = useForm<formValueProps>({defaultValues:formValues, resolver});
    const {register, handleSubmit} = form;
 

    const sumbithandler = (data:formValueProps)=> {
        setLoading(true);
        const formpayload = {
          companyName:data.companyName,
          email:data.emailAddress,
          password:data.password,
        }
        const sumbitForm = async() =>{
          try {
            const response = await axios.post("https://descout.vercel.app/api/v1/auth", formpayload);
            toast.success(response?.data?.message,{
              position: "top-right",
              autoClose: 5000,
            })
            setLoading(false);
            setTimeout(()=> (navigate("/login")),3000)
          } catch (error:any) {
            console.error('Error:', error);
            if(error.response.status === 409){
              toast.error("user already exist",{
                position: "top-right",
                autoClose: 5000,
              })
            }
            setLoading(false);
          }
        }
        sumbitForm();
        }
    
    const errorHandler = (err: FieldErrors<formValueProps>)=>{
      console.log(err,"errorHandler");
      if (err.companyName) {
        toast.error(err.companyName.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
      if (err.emailAddress) {
        toast.error(err.emailAddress.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
      if (err.password) {
        toast.error(err.password.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
      if (err.reenterPassword) {
        toast.error(err.reenterPassword.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    };

  return (
    <div className="bg-black bg-custom-image bg-cover bg-center h-screen msm:h-full text-white flex flex-col justify-center items-center msm:px-[24px] mxxxs:px-[16px]">
      <div className="xl:w-[1116px] lg:w-[900px] mx-auto bg-[#141414] min-h-[780px]   px-[48px] py-[32px] msm:px-[24px] msm:py-[16px] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <Typography
            variant="h3"
            fontWeight="black"
            font="CabinetGrotesk"
            customClassName="msm:text-h-1 msm: font-bold"
          >
            Creating Your Account
          </Typography>
          <Typography
            variant="body-t"
            fontWeight="medium"
            font="CabinetGrotesk"
            color="star5"
          >
            Welcome to the best background checker for ride-hailing services out
            there.
          </Typography>
        </div>
        <form onSubmit={handleSubmit(sumbithandler,errorHandler)}>
          <div className="flex flex-col gap-4 ">
            <div className="grid grid-cols-2 grid-rows-2 gap-8 msm:flex msm:flex-col">
              <Input
                name="companyName"
                label="Company Name"
                placeholder="Jeremiah Folorunso"
                bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                type="text"
                register={register}
              />
              <Input
                name="emailAddress"
                label="Email Address"
                placeholder="jeremiah@emailaddress.com"
                bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                type="text"
                register={register}
              />
              <Input
                name="password"
                label="Password"
                placeholder="starboy122#?$””:("
                bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                passwordFunc={togglePassword}
                icon2={passwordState ? <EyeSlash /> : <Eye />}
                passwordWay={passwordState}
                register={register}
              />
              <Input
                name="reenterPassword"
                label="Re-enter Password"
                placeholder="starboy122#?$””:("
                bgcolor="placeholder:text-star-dust-800 bg-[#141414]  border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                passwordFunc={toggleSecondPassword}
                icon2={secondPasswordState ? <EyeSlash /> : <Eye />}
                passwordWay={secondPasswordState}
                register={register}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <label className="custom-checkbox">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-[16.5px] h-[16.5px] bg-[#141414] border border-[#D6D6D6]  inline-block peer-checked:bg-blue-600"></span>
                </label>
                <p className="text-body-u text-star-dust-500 font-regular">
                  {" "}
                  I have read and agreed to the{" "}
                  <span>terms and conditions</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="custom-checkbox">
                  <input type="checkbox" className="hidden peer" />
                  <span className="w-[16.5px] h-[16.5px] bg-[#141414] border border-[#D6D6D6]  inline-block peer-checked:bg-blue-600"></span>
                </label>
                <Typography
                  variant="body-u"
                  color="star5"
                  fontWeight="regular"
                  font="CabinetGrotesk"
                >
                  I agree to recieve promotional informations through
                  newsletters
                </Typography>
              </div>
            </div>
            <div className="flex gap-8 items-center pt-4 msm:flex-col msm:items-none">
              <Button
                children="Create an account"
                rightIcon={<Arry />}
                color="white"
                size="medium"
                customClassName="bg-[#654EF2] "
                fontWeight="medium"
                type="submit"
                loading={loading}
              />
              <Button
                children="Login to your account"
                rightIcon={<Arry />}
                color="star5"
                size="medium"
                customClassName="bg-[#141414] border border-[#5C5C5C]"
                fontWeight="medium"
                onClick={RouteLogin}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
