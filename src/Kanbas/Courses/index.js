import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import ModuleListEditor from "./Modules/ModulesEditor";
import { FiMenu } from "react-icons/fi"
import "./index.css";
import { useState } from "react";


function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const [OpenNav, setOpen] = useState(true);

  const toggleNav = () => {
    setOpen(!OpenNav);
  };

  return (
    <div id="course-container">
      <div className="row" id="header">
        <div className="col-12">
          <div className="d-flex align-items-center" id="header">
            <button type="button" className="btn" onClick={toggleNav}>
              <FiMenu id="menu-button" />
            </button>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" style={{ "--bs-breadcrumb-divider": "'>'" }}>
                <li className="breadcrumb-item"><a href="#">{course._id}</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  {location.pathname.split("/").pop()}
                </li>
              </ol>

            </nav>
          </div>
        </div>
      </div>


      {OpenNav && <CourseNavigation />}
      <div className="row">

        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Modules/ModulesEditor"
              element={<ModuleListEditor />}
            />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;