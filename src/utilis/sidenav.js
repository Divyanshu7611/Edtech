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









import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: <FaRegUser />,
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: <IoMdBookmarks />,
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: <FaRegBookmark />,
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: <IoCartOutline />,
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: <IoSettingsOutline />,
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.STUDENT,
    icon: <LuLogOut />,
  },
];
