import  { useState } from "react";
import { Typography } from "@utils/typography";
import { Button } from "@utils/button";
import { Input } from "@utils/input";
import Arry from "@assets/arry";
import Cuppy from "@assets/cuppy";
import { useNavigate } from "react-router-dom";
import Eye from "@assets/eye";
import EyeSlash from "@assets/eyeSlash";
import { FieldErrors, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppContext } from "@api/mainAppContext";

type loginformProps ={
  email ?: string;
  password : string;
}

export default function Login() {
  const navigate = useNavigate();
  const routeRegisterPage = () => navigate("/register");
  const [passwordState, setPasswordState] = useState(false);
  const [loading , setLoading] = useState<boolean>(false);
  const togglePassword = () => setPasswordState((prev) => !prev);
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required(" password is required"),
   
  });
  const {userDetailHandler} = useAppContext();

  const { register, handleSubmit } = useForm({ defaultValues:{
    email: "",
    password: "",
  },
  resolver: yupResolver(schema)
  });


  const sumbitHandler =(data:loginformProps)=>{
      setLoading(true);
    const sumbitLoginForm =async()=>{
      try {
        const response = await axios.post("https://descout.vercel.app/api/v1/auth/login", data);
        console.log('Response:login', response);
        const result ={
          isloggedin : true,
          token: response?.data?.data?.token,
          companyName: response?.data?.data?.companyName,
        }
        userDetailHandler(result);
        toast.success(response?.data?.message, {
          position: "top-right",
          autoClose: 5000,
        });
        navigate("/home")
        setLoading(false);
      }
      catch (error:any) {
        if (error?.response?.status === 404) {
          const errorMessage = error?.message;

          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
          });
        }
        setLoading(false);
      }
    }
    sumbitLoginForm();

    }
  

  const errorHandler =(err:FieldErrors<loginformProps>)=>{
    if (err.email) {
      toast.error(err.email.message, {
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
  };
  return (
    <div className="bg-black bg-custom-image bg-cover bg-center h-screen text-white pt-[100px] msm:pt-[20px] px-[20px]">
      <div className="max-w-[660px] mx-auto bg-[#141414] min-h-[514px] msm:h-full  px-[48px] msm:px-[24px] py-[48px] msm:py-[24px] flex flex-col gap-8 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="h4" fontWeight="bold" font="CabinetGrotesk">
              Accessing Your Account
            </Typography>
            <Typography
              variant="body-t"
              fontWeight="medium"
              font="CabinetGrotesk"
              color="star5"
            >
              If you dont't have an account,{" "}
              <span
                className="text-body-v text-white"
                onClick={routeRegisterPage}
              >
                {" "}
                Click here to signup
              </span>
            </Typography>
          </div>
          <div className="msm:hidden">
            <Cuppy />
          </div>
        </div>
        <form onSubmit={handleSubmit(sumbitHandler,errorHandler)}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Input
                name="email"
                label="Email Address"
                placeholder="jeremiah@emailaddress.com"
                bgcolor="placeholder:text-star-dust-500 bg-[#141414] border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                register={register}
              />
              <Input
                name="password"
                label="Password"
                placeholder="jeremiah@emailaddress.com"
                bgcolor="placeholder:text-star-dust-500 bg-[#141414] border-[#5C5C5C]"
                labelCustomClassName="text-star-dust-500"
                maindiv="flex-grow-3"
                passwordFunc={togglePassword}
                icon2={passwordState ? <Eye /> : <EyeSlash />}
                passwordWay={passwordState}
                register={register}
              />
            </div>
            <div className="flex flex-col gap-4">
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
                  Keep me signed in
                </Typography>
              </div>
            </div>
            <div className="flex gap-8 items-center pt-4">
              <Button
                children="Login To My Account"
                rightIcon={<Arry />}
                color="white"
                size="medium"
                customClassName="bg-[#654EF2] "
                fontWeight="medium"
                type="submit"
                loading={loading}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
