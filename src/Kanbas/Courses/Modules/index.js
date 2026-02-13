import ModuleList from "./ModuleList";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";


function Modules() {



  return (
    <div className="row">
      <div className="col-7">
        <ModuleList />
      </div>
      <div className="col-4">
        <Link to="./ModulesEditor">
          <button className="btn btn-warning">
            <FaPencilAlt /> Edit Modules
          </button>
        </Link>
      </div>
    </div>

  );
}

export default Modules;
