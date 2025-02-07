import React from 'react'
// import { sidebarLinks } from '../../../data/dashboard-links'
import { VscSignOut } from "react-icons/vsc"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import sideLinks from '../../../data/dashboard-links';
import SideLink from './SideLink';
import { logout } from '../../../services/operations/authApi';


function Sidebar() {
  const dispatch = useDispatch();
  const {user, loading:authLoading} = useSelector((state)=>state.profile)
  const {loading:profileLoading} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="loader"></div>
      </div>
    )
  }
  const handleLogout = () =>{
    dispatch(logout(navigate))
  }
  return (
    <div className='flex h-[calc(100vh-0.5rem)] min-w-[180px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-16 px-2'>
      <div className='flex flex-col justify-starts items-center gap-2'>
        {
          sideLinks.map((links)=> {
            if(links.type && user?.accountType !== links.type){
              // console.log(user.accountType, links.type);
            return null;
            }
            return(
            <React.Fragment key={links.id}>
            <SideLink key={links.id} iconName={links.icon} link={links.path} title={links.name}/>
            {links.name === "My Profile" && user.accountType == "Instructor" && <div className="bg-[#424854] w-full h-px opacity-60"></div>}
            </React.Fragment>
          )
        })
      }




      <div className='bg-[#424854] w-full h-px opacity-50'/>
      </div>  
      <SideLink iconName="VscSettings" title="Settings" link="/dashboard/settings"/>
      <span onClick={handleLogout} className='cursor-pointer w-fit flex justify-start'>
      <SideLink iconName="VscSignOut" title="Logout" link="#"/>
      </span>


    </div>
  )
}

export default Sidebar