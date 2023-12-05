import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import { Link } from "react-router-dom";



function Account() {
    const { id } = useParams();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const [OpenNav, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!OpenNav);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };


    return (
        <>
            <div className="row">
                <div className="col">
                    {OpenNav && <AccountNavigation />}
                </div>
                <div className="col w-50">
                    <h1>Account</h1>
                    {account && (
                        <div>
                            <input className="form-control" value={account.password}
                                onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                            <input className="form-control" value={account.firstName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    firstName: e.target.value
                                })} />
                            <input className="form-control" value={account.lastName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    lastName: e.target.value
                                })} />
                            <input className="form-date-input" value={account.dob}
                                onChange={(e) => setAccount({
                                    ...account,
                                    dob: e.target.value
                                })} />
                            <input className="form-control" value={account.email}
                                onChange={(e) => setAccount({
                                    ...account,
                                    email: e.target.value
                                })} />
                            <select className="form-select" onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                            <button className="btn btn-primary w-100" onClick={save}>
                                Save
                            </button>
                            <button className="btn btn-danger w-100" onClick={signout}>
                                Signout
                            </button>

                            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                                Users
                            </Link>


                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Account;

