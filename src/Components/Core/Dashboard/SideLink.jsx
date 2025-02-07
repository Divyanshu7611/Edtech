import { matchPath } from 'react-router-dom'
import React from 'react'
import * as Icons from "react-icons/vsc"
import { useLocation,NavLink } from 'react-router-dom'

const SideLink = ({iconName,link,title}) => {
    const Icon = Icons[iconName] || Icons.VscQuestion
    const location = useLocation()

    // const matchRoute = (route) => {
    //   if (!route) return false;
    //    return matchPath({path:route, end:true}, location.pathname)
  
    // }
    const matchRoute = (route) => route && matchPath(route,location.pathname)
   return (
    <NavLink to={link} className={`w-full h-10 text-sm gap-5 flex justify-start ${matchRoute(link.path) ? "border-2 border-[#FFD60A] bg-[#3D2A01] text-[#FFD60A]" : "text-[#838894]"}`}>
        <span className={`h-full bg-[#FFD60A] w-1 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>
        <div className="flex items-center justify-start gap-x-3">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{title}</span>
      </div>
       
    </NavLink>
  )
}

export default SideLink



// import * as Icons from "react-icons/vsc"
// import { useDispatch } from "react-redux"
// import { NavLink, matchPath, useLocation } from "react-router-dom"
// import React from "react"

// // import { resetCourseState } from "../../../slices/courseSlice"

// export default function SidebarLink({ link, iconName }) {
//   const Icon = Icons[iconName]
//   const location = useLocation()
//   const dispatch = useDispatch()

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   return (
//     <NavLink
//       to={link.path}
//       // onClick={() => dispatch(resetCourseState())}
//       className={`relative px-8 py-2 text-sm font-medium ${
//         matchRoute(link.path)
//           ? "bg-yellow-800 text-yellow-50"
//           : "bg-opacity-0 text-richblack-300"
//       } transition-all duration-200`}
//     >
//       <span
//         className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
//           matchRoute(link.path) ? "opacity-100" : "opacity-0"
//         }`}
//       ></span>
//       <div className="flex items-center gap-x-2">
//         {/* Icon Goes Here */}
//         <Icon className="text-lg" />
//         <span>{link.name}</span>
//       </div>
//     </NavLink>
//   )
// }
