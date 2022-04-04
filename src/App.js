// npm install json-server react-icons

/*"scripts": {
  "backend": "json-server --watch db.json --port 5000"}*/

//npm run backend in new terminal


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Person from "./components/pages/Person";
import Courses from "./components/pages/Courses";
import NewCourse from "./components/pages/NewCourse";
import Schedule from "./components/pages/Schedule";
import Course from "./components/pages/Course";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Container from "./components/layout/Container";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route excact path="/" element={<Person />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/NewCourse" element={<NewCourse />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Course/:id" element={<Course />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
