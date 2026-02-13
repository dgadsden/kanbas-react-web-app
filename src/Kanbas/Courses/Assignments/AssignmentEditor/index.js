// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";
// import { FaEllipsisV } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
// import "./index.css"




// function AssignmentEditor() {
//   const { assignmentId, courseId } = useParams();
//   const params = useParams();
//   const assignment = db.assignments.find(
//     (assignment) => assignment._id === assignmentId
//   );

//   const navigate = useNavigate();
//   const handleSave = () => {
//     console.log("Actually saving assignment TBD in later assignments");
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//     <div className="row">

//     </div>
//   };
//   return (
//     <div className="col-7">
//       <div class="row" id="course-buttons">
//         <div class="col" >
//           <div className="button-items">
//             <FaCheckCircle className="check" />
//             <b id="published">Published</b>
//             <button
//               type="button"
//               class="btn btn-light"
//               href="/kanbas/assignments/edit.html"
//             >
//               <FaEllipsisV />
//             </button>
//           </div>
//           <hr />
//         </div>
//       </div>
//       <h2>Assignment Name</h2>
//       {/* <pre>
//         <code>{JSON.stringify(params, null, 2)}</code>
//       </pre> */}
//       <input value={assignment.title} className="form-control mb-2" />
//       <div className="float-end">
//         <Link
//           to={`/Kanbas/Courses/${courseId}/Assignments`}
//           className="btn btn-danger"
//         >
//           Cancel
//         </Link>
//         <button onClick={handleSave} className="btn btn-light me-2">
//           Save
//         </button>
//       </div>
//     </div >
//   );
// }

// export default AssignmentEditor;
