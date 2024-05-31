import React from 'react'
import { useAppContext } from '@api/mainAppContext';
import { Navigate } from 'react-router-dom';

 interface protectedRouteProps{
    children: React.ReactNode;
}
export default function ProtectedRoute( prop: protectedRouteProps) {
    const { userDetailState} = useAppContext();
    const token = userDetailState.token;
    const isloggedin = userDetailState.isloggedin;
    const companyName = userDetailState.companyName;
    if(token && isloggedin && companyName) {
        return (
            <div>{prop.children}</div>
          )
    }
    else{
        return <Navigate to={"/login"}/>
    }
  
}
 