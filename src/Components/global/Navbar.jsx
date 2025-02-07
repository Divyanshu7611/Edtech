import React, { useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  const subLinks = [
    {
      title: "python",
      link: "/catalog/python",
    },
    {
      title: "web dev",
      link: "/catalog/web-development",
    },
  ];
  const { user } = useSelector((state) => state.profile)
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const [smallScreen, setSmallScreen] = useState(false);
  const [openSidebar, setSidebar] = useState(false);
  return (
    <div className="bg-[#161D29] min-w-screen border border-[#2C333F] h-12 flex items-center py-2 fixed z-40 w-full">
      {!smallScreen && (
        <div className="flex max-w-maxContent mx-auto justify-between items-center w-full">
          <img src={logo} alt="" height={32} width={160} />
          <nav className="text-base text-[#DBDDEA]">
            <ul className="flex gap-4">
              {NavbarLinks.map((link, index) => (
                <li>
                  {link.title === "Catalog" ? (
                    <div>
                      <div className="flex justify-between items-center gap-2 cursor-pointer relative">
                        <p>{link.title}</p>
                        <IoIosArrowDropdownCircle />

                        <div
                          className="invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[80%]
                                 top-[50%]
                                flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px] z-20"
                        >
                          <div
                            className="absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"
                          ></div>

                          {subLinks.length ? (
                            subLinks.map((subLink, index) => (
                              <Link to={`${subLink.link}`} key={index}>
                                <p>{subLink.title}</p>
                              </Link>
                            ))
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                          }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2">
            {
              !user && (
                <div>

                  <button className="border border-[#2C333F] rounded-lg px-5 py-2 text-[#AFB2BF] text-base font-medium">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="border border-[#2C333F] rounded-lg px-3 py-2 text-[#AFB2BF] text-base font-medium">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </div>
              )
            }
            {
              user && (
                <div className="flex gap-x-3 justify-center items-center">
                      <div><IoSearch className="text-[#999DAA] h-6 w-6"/></div>
                      <div>
                        <Link to="/cart">
                        <MdOutlineShoppingCart className="text-[#999DAA] h-6 w-6"/>
                        </Link>
                        </div>
                      <div>
                        <Link to="/dashboard">
                                <img src={user?.image} alt="NAN" className="h-8 w-8 rounded-full" />
                        </Link>
                        </div>
                </div>
              )
            }
          </div>
        
      </div>
      )}
      {/* </div> */}
      {/* small sceen navbar */}
      {smallScreen && (
        <div className="flex max-w-maxContent mx-auto justify-between items-center w-full px-3">
          <div className="flex justify-between items-center w-full">
            <img src={logo} alt="" height={32} width={160} />
            <div className="text-white text-3xl">
              {openSidebar && (
                <button className="border-none mt-2">
                  <RxCross2 />
                </button>
              )}
              {!openSidebar && (
                <button className="border-none mt-2">
                  <GiHamburgerMenu />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

