import "./App.css";
import Login from "./Components/Login";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div>
      <Login />
      <ContactUs />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "./App.css";
// import Login from "./Components/Login";
// import ContactUs from "./Components/ContactUs";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container">
//             <Link className="navbar-brand" to="/">
//               Home
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="container mt-4">
//           <Route exact path="/" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/contact" component={ContactUs} />
//         </div>
//       </div>
//     </Router>
//   );
// }

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//     {/* Add your home page content here */}
//   </div>
// );

// export default App;
