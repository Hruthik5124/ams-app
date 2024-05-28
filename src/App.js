import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Adddepartment from './pages/Adddepartment';
import Addfaculty from './pages/Addfaculty';
import Department from './pages/Department';
import Faculty from './pages/Faculty'


function App() {
  return (
      <div className='flex  overflow-hidden'>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="adddepartment" element={<Adddepartment />} />
            <Route path="addfaculty" element={<Addfaculty />} />
            <Route path="department" element={<Department />} />
            <Route path="faculty" element={<Faculty />} />
          </Routes>
        </Router>
        
      </div>
  );
}

export default App;
