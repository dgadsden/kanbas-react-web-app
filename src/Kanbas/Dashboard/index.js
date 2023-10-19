import { Link } from "react-router-dom";
import db from "../Database";
import { FaFileAlt } from "react-icons/fa"
import "./index.css";



function Dashboard() {
  const courses = db.courses;
  return (
    <div id="dash-container">
      <h1>Dashboard</h1>
      <hr />

      <div className="row">
        <p>Published Courses({courses.length})</p>
        <hr />
      </div>

      <div className="d-flex flex-wrap">
        {courses.map((course) => (

          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="link-class">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={process.env.PUBLIC_URL + course.courseImage} />
              <div className="card-body">
                <h5 className="card-title">{course.number}</h5>
                <p className="card-text">{course.name}</p>
                <a href="#" > <FaFileAlt style={{ fontSize: 25, color: "gray" }} /></a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
