import React, { createContext, useState, useContext } from 'react';
import { DriverDataProps , userDetails } from './index.types';
import useLocalStorage from '@hooks/useLocalStorage';


interface AppContextType {
  driverState: DriverDataProps[];
  userDetailState: userDetails;
  getDriverData: (item: DriverDataProps) => void;
  userDetailHandler:(item: userDetails)=> void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const initialDriverData:DriverDataProps[] =[];

interface AppProviderProps {
  children: React.ReactNode;
};

export const AppProvider:React.FC<AppProviderProps> = ({ children }:any) => {

  const userDetails ={
    isloggedin : false,
    token : "",
    companyName : "",
  }

  const[userDetail , setUserDetail]= useLocalStorage("loggedData", userDetails);
  
  const [userDetailState, setUserDetailState] = useState<userDetails>(userDetail);
  
  const[storedValue, setValue]= useLocalStorage("storedDriverInfo", initialDriverData);

  const [driverState,setDriverState] = useState<DriverDataProps[]>(storedValue);

  const getDriverData =(item:DriverDataProps)=>{
    setDriverState([item]);
    setValue([item]);
  }
  const userDetailHandler = (item:userDetails)=>{
      setUserDetail(item);
      setUserDetailState(item);
  };

  const values:AppContextType ={
    driverState,
    userDetailState,
    getDriverData,
    userDetailHandler
  }
  return (
    <AppContext.Provider
      value={values}
    >
      {children}
    </AppContext.Provider>
  );
};
