import ModuleList from "../Modules/ModuleList";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css"

function Home() {
  return (
    <div className="container-flex">
      <div className="container">
        <div className="row">


          <div className="row">
            <div className="col-7">
              <div className="row" id="course-buttons">
                <div className="col">
                  <button type="button" className="btn btn-light">Collapse All</button>
                  <button type="button" className="btn btn-light">View Progress</button>
                  <select className="form-select">
                    <option value="PUBLISH">Publish All</option>
                    <option value="PUB-ONE">Publish One</option>
                  </select>
                  <button type="button" className="btn btn-danger">Module</button>
                  <button type="button" className="btn btn-light"><FaEllipsisV /></button>
                  <hr />
                </div>
              </div>
              <ModuleList />
            </div>

            <div class="col-md-2" id="course-status">
              <p>Course Status</p>
              {/* <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-light">
                    <i class="fas fa-ban"></i>Unpublish
                  </button>
                  <button type="button" class="btn btn-success">
                    <i class="fas fa-check-circle" ></i
                    >Published
                  </button>
                </div>
              </div>
 */}

              <div id="course-stat-btn2">
                <div class="row">
                  <button type="#" class="btn btn-light">
                    Import Existing Content
                  </button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">
                    Import From Commons
                  </button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">Choose Home Page</button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">View Coure Stream</button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">New Announcement</button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">New Analytics</button>
                </div>
                <div class="row">
                  <button type="#" class="btn btn-light">
                    View Course Notifications
                  </button>
                </div>
              </div>
              <p >To Do</p>
              <hr />
              <p>Comming Up</p>
              <a href="#">View Calendar</a>
              <ul>
                <li>
                  <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                </li>
                <li>
                  <a href="#">Lecture CS4550.12631.202410 Sep:11 at11:45am</a>
                </li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Home;
