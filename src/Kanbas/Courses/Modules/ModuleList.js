import { FaCheckCircle } from "react-icons/fa";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
// import { findModulesForCourse } from "./client";
import "./index.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

  
  

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