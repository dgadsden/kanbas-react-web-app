import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/account");
    };
    const [OpenNav, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!OpenNav);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    {OpenNav && <AccountNavigation />}
                </div>
                <div className="col w-50">
                    <h1>Signin</h1>
                    <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                    <input className="form-control" value={credentials.password} type="password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                    <button className="btn btn-primary w-100" onClick={signin}> Signin </button>
                </div>
            </div >
        </>
    );
}
export default Signin;
