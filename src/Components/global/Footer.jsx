import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiGoogleLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#161D29] min-w-screen lg:py-[52px] lg:px-[120px] border border-[#424854] px-[16px] py-[32px]">
      <div className="max-w-maxContent mx-auto flex lg:flex-row flex-col gap-[24px]">
        <div className="lg:w-2/4 flex gap-[12px] lg:border-r lg:border-[#2C333F] flex-wrap justify-between lg:justify-start">
          {/* col1 */}
          <div className="flex flex-col gap-[12px] lg:w-[174.67px] w-[167px]">
            <img src={logo} alt="" height={32} width={160} />

            <h1 className="text-[#AFB2BF] text-base font-semibold">Company</h1>
            <div className="flex flex-col gap-[8px] text-sm text-[#6E727F]">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Careers
              </a>
              <a href="#" className="hover:underline">
                Affiliates
              </a>
            </div>
            <div className="flex text-[24px] gap-[12px]">
              <PiFacebookLogoFill className="text-[#6E727F]" />
              <PiGoogleLogoFill className="text-[#6E727F]" />
              <FaTwitter className="text-[#6E727F]" />
              <FaYoutube className="text-[#6E727F]" />
            </div>
          </div>
          {/* col2 */}
          <div className="flex flex-col gap-[36px] lg:w-[174.67px] w-[167px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[#AFB2BF] text-base font-semibold">
                Resources
              </h1>
              <div className="flex flex-col gap-[8px] text-sm text-[#6E727F]">
                <a href="#" className="hover:underline">
                  Articles
                </a>
                <a href="#" className="hover:underline">
                  Blog
                </a>
                <a href="#" className="hover:underline">
                  Chart Sheet
                </a>
                <a href="#" className="hover:underline">
                  Code challenges
                </a>
                <a href="#" className="hover:underline">
                  Docs
                </a>
                <a href="#" className="hover:underline">
                  Projects
                </a>
                <a href="#" className="hover:underline">
                  Videos
                </a>
                <a href="#" className="hover:underline">
                  Workspaces
                </a>
              </div>
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[#AFB2BF] text-base font-semibold">
                Support
              </h1>
              <div className="flex flex-col gap-[8px] text-sm text-[#6E727F]">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </div>
            </div>
          </div>
          {/* col3 */}
          <div className="flex lg:flex-col gap-[36px] lg:w-[174.67px] w-full justify-between lg:justify-start">
            <div className="flex flex-col gap-[12px] w-[167px] lg:w-0">
              <h1 className="text-[#AFB2BF] text-base font-semibold">Plans</h1>
              <div className="flex flex-col gap-[8px] text-sm text-[#6E727F]">
                <a href="#" className="hover:underline">
                  Paid memberships
                </a>
                <a href="#" className="hover:underline">
                  For students
                </a>
                <a href="#" className="hover:underline">
                  Business solutions
                </a>
              </div>
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-[12px] w-[167px] lg:w-0">
              <h1 className="text-[#AFB2BF] text-base font-semibold">
                Community
              </h1>
              <div className="flex flex-col gap-[8px] text-sm text-[#6E727F]">
                <a href="#" className="hover:underline">
                  Forums
                </a>
                <a href="#" className="hover:underline">
                  Chapters
                </a>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/4">
          <div className="flex gap-[12px] lg:justify-end flex-wrap justify-between">
            {FooterLink2.map((data) => (
              <div
                key={data.title}
                className="flex flex-col gap-[12px] lg:w-[174.67px] w-[167px]"
              >
                <h1 className="text-[#AFB2BF] text-base font-semibold">
                  {data.title}
                </h1>
                <ul className="text-[#6E727F] text-sm gap-[8px] flex flex-col">
                  {data.links.map((link) => (
                    <li key={link.title} className="hover:underline">
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* line */}
      </div>
      <hr className="mt-7 text-[#2C333F]" />
      <div className="w-full lg:justify-between justify-center items-center flex lg:mt-9 mt-5 lg:flex-row flex-col gap-2">
        <div className="text-[#838894] text-sm font-medium gap-3 flex">
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline">
            Cookie Policy
          </Link>
          <Link to="#" className="hover:underline">
            Terms
          </Link>
        </div>
        {/* 2 */}
        <div className="text-[#838894] text-sm font-medium">
          <p>Made by ♥ Divyanshu © 2024 CodeSphere</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
