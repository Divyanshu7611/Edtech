import { FaRegUser } from "react-icons/fa6";
import { MdContactPage } from 'react-icons/md';
import { IoMdBookmarks } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const navData = [
  {
    name: 'My Profile',
    path: '/',
    icon: <FaRegUser />,
  },
  {
    name: 'Enrolled Courses',
    path: '/profile',
    icon: <IoMdBookmarks />,
  },
  {
    name: 'Wishlist',
    path: '/settings',
    icon: <FaRegBookmark />,
  },
  {
    name: 'Purchase History',
    path: '/contact',
    icon: <IoCartOutline />,
  },
  {
    name: 'Courses',
    path: '/contact',
    icon: <LuGraduationCap />,
  },
  {
    name: 'Settings',
    path: '/contact',
    icon: <IoSettingsOutline />,
  },
  {
    name: 'Log out',
    path: '/contact',
    icon: <LuLogOut />,
  },
];

export default navData;









