import { matchPath } from 'react-router-dom'
import React from 'react'
import * as Icons from "react-icons/vsc"
import { useLocation,NavLink } from 'react-router-dom'

function SideLink({iconName,link}) {
    const Icon = Icons[iconName]
    const location = useLocation()

    const matchRoute = (route) => {
       return matchPath({path:route}, location.pathname)
    }
  return (
    <NavLink to={link.path} className={`w-full h-10 p-2 text-sm gap-5 flex ${matchRoute ? "border-2 border-[#FFD60A] bg-[#3D2A01] text-[#FFD60A]" : "text-[#838894]"}`}>
        <span className={`h-full bg-[#FFD60A] w-1 ${matchRoute ? "opacity-100" : "opacity-0"}`}></span>
        <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
       
    </NavLink>
  )
}

export default SideLink