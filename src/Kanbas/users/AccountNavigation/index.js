import { Link, useLocation } from "react-router-dom";
import { FcCancel } from "react-icons/fc";
import "./index.css";
function AccountNavigation() {
    const links = ["Home", "Search", "Signin", "Signup", "Assignments", "Account"];
    const { pathname } = useLocation();
    return (
        <div className="wd-account-navigation list-group" style={{ width: 100 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default AccountNavigation;
