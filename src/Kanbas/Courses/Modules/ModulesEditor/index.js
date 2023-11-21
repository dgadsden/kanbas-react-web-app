import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "../modulesReducer";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { findModulesForCourse, createModule } from "../client";
import * as client from "../client";


import "../index.css"


function ModuleListEditor() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };



    return (
        <div className="row">
            <div className="col-7">

                <ul className="list-group">
                    <li className="list-group-item">
                        <button className="btn btn-success float-end" onClick={handleAddModule}>
                            Add</button>
                        <button className="btn btn-primary float-end" onClick={handleUpdateModule}>
                            Update
                        </button>
                        <input className="form-control" value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                        <textarea className="form-control" value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                            }
                        />
                    </li>
                    {modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <div id="module-item">

                                <li class="list-group-item list-group-item-secondary">
                                    {module.name}
                                    <div class="d-flex float-end">
                                        <button className="btn btn-warning"
                                            onClick={() => dispatch(setModule(module))}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => handleDeleteModule(module._id)}>
                                            Delete
                                        </button>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    {module.description}
                                    {/* <div class="float-end">
                                        <FaCheckCircle class="module_icon check" />
                                        <FaEllipsisV class="module_icon" />
                                    </div> */}
                                </li>
                            </div>
                        ))}
                </ul>
            </div>
            <div className="col-4">
                <Link to={`/Kanbas/Courses/${courseId}/Modules`}>
                    <button className="btn btn-success">
                        Publish Modules
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default ModuleListEditor;
