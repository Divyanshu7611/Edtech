import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Sidebar from "../Components/Core/Dashboard/Sidebar";


function Dashboard() {

    const {loading:profileLoading} = useSelector((state)=>state.profile)
    const {loading:authLoading} = useSelector((state)=>state.auth)

    if(authLoading || profileLoading){
        return(
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }
  return (
    <div className="min-w-screen flex min-h-[cal(100vh - 3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-0.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
