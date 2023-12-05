import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import AccountNavigation from "./AccountNavigation";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    const [OpenNav, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!OpenNav);
    };

    return (
        <div className="row">
            <div className="col">
                {OpenNav && <AccountNavigation />}
            </div>
            <div className="col">
                <h1>Signup</h1>
                {error && <div>{error}</div>}
                <input className="form-control"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value
                    })} />
                <input className="form-control"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })} />
                <button className="btn btn-primary w-100" onClick={signup}>
                    Signup
                </button>
            </div>
        </div>
    );
}
export default Signup;

