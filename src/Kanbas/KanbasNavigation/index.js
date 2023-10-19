import { Link, useLocation } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { FaEnvelopeOpen } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { MdVideoSettings } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import NU_logo from "./NU_logo.png";
import "./index.css";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-2 text" id="account" />,
    Dashboard: <RiDashboard3Line className="fs-2 text" />,
    Courses: <FaBook className="fs-2 text" />,
    Calendar: <BsCalendar2Week className="fs-2 text" />,
    Inbox: <FaEnvelopeOpen className="fs-2 text" />,
    History: <AiOutlineClockCircle className="fs-2 text" />,
    Studio: <MdVideoSettings className="fs-2 text" />,
    Commons: <FaSignOutAlt className="fs-2 text" />,
    Help: <BiHelpCircle className="fs-2 text" />,

  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" >
      <img src={NU_logo} alt="Logo" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-4 ${pathname.includes(link) && "active"}`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;