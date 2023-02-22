import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Attendance from "./components/Attendance";
import Courses from "./components/Courses";
import Display from "./components/Display";
import FirstPage from "./components/FirstPage";
import Main from "./Main";
import Navi from "./Navi";
import Home2 from "./pages/Home.page";

function App() {
  return (
    <Router>
      <Routes>
      <Route path = '/' element = {<FirstPage  />} />
      <Route path = '/attendance' element = {<Attendance  />} />
        <Route path = '/courses' element = {<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
