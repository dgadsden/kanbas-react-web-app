import { React } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaPencilAlt } from "react-icons/fa";
import "./index.css";


function Dashboard({ courses }

) {
  return (
    <div id="dash-container">
      <h1>Dashboard</h1>
      <hr />
      <div className="row">
        <div className="d-flex align-items-center">
          <p>Published Courses({courses.length})</p>
          <div className="float-end">
            <Link to="./DashboardEditor">
              <button className="btn btn-warning">
                <FaPencilAlt /> Edit Courses
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="d-flex flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/courses/${course._id}`} className="link-class">
            <div className="card" style={{ width: '18rem' }}>
              {/* <img className="card-img-top" src={course.courseImage ? process.env.PUBLIC_URL + course.courseImage : process.env.PUBLIC_URL + 'images/stock_image.png'} alt={`Class Image for ${course.name}`} /> */}
              <div className="card-body">
                <h5 className="card-title">{course.number}</h5>
                <p className="card-text">{course.name}</p>
                {/* <a href={`/Kanbas/Courses/${course._id}`} > <FaFileAlt style={{ fontSize: 25, color: "gray" }} /></a> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
