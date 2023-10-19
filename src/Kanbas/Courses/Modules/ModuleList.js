import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div id="module-item">
            <li class="list-group-item list-group-item-secondary">
              {module.name}
              <div class="float-end">
                <FaCheckCircle class="module_icon check" />
                <FaPlus class="module_icon" />
                <FaEllipsisV class="module_icon" />
              </div>
            </li>
            <li class="list-group-item">
              {module.description}
              <div class="float-end">
                <FaCheckCircle class="module_icon check" />
                <FaEllipsisV class="module_icon" />
              </div>
            </li>
          </div>
        ))}
    </ul>
  );
}
export default ModuleList;
