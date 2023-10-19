import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="col-7" style={{ paddingTop: 20 }}>
      <div className="row" id="course-buttons">
        <div className="col">
          <input
            class="form-control w-25 float-start"
            placeholder="Search for Assignment"
          />
          <button type="button" className="btn btn-light">
            <i className="fas fa-plus"></i> + Group
          </button>
          <button type="button" className="btn btn-danger">
            <i className="fas fa-plus"></i> Assignments
          </button>

          <button type="button" className="btn btn-light">
            <FaEllipsisV /></button>
          <hr />
        </div>
      </div>
      <div className="list-group">
        <li className="list-group-item list-group-item-secondary">
          <b>ASSINGMENTS</b>
          <div className="float-end">
            <div>
              <p className="grade-total">40% of Total</p>
              <FaPlus className="module_icon" />
              <FaEllipsisV className="module_icon" />
            </div>
          </div>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="link-class"
          >
            <div id="assignment-item">

              <li className="list-group-item">
                {assignment.title}
                <div className="float-end">
                  <FaCheckCircle className="module_icon check" />
                  <FaEllipsisV className="module_icon" />
                </div>
              </li>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
