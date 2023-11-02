import { React } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

import "../index.css";


function DashboardEditor({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
    return (
        <div id="dash-container">
            <h1>Edit Dashboard</h1>
            <hr />

            <div className="row">
                <div className="d-flex align-items-center">
                    <p>Published Courses({courses.length})</p>
                    <Link to={`/Kanbas/Dashboard`}><button className="btn btn-success">Publish Courses</button></Link>
                </div>
                <hr />
            </div>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />

            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />

            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />


            <button className="btn btn-success" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-primary" onClick={updateCourse} >
                Update
            </button>


            <div className="d-flex flex-wrap">
                {courses.map((course) => (

                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="link-class">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={course.courseImage ? process.env.PUBLIC_URL + course.courseImage : process.env.PUBLIC_URL + 'images/stock_image.png'} alt={`Class Image for ${course.name}`} />
                            <div className="card-body">
                                <h5 className="card-title">{course.number}</h5>
                                <p className="card-text">{course.name}</p>
                                <a href={`/Kanbas/Courses/${course._id}`} > <FaFileAlt style={{ fontSize: 25, color: "gray" }} /></a>

                                <button className="btn btn-danger float-end"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                                <button className="btn btn-warning float-end"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default DashboardEditor;
