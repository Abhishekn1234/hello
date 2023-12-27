
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Department from './components/Department';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Settings from './components/Settings';
import Products from './components/Products';
import Departments from './components/Departments';
import DepartmentForm from './components/Department';
import DepartmentHead from './components/DepartmentHead';
import DepartmentHeadList from './components/DepartmentHeadList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/news' element={<News/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Signup />} />
          <Route path="/departments" element={<Departments/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/department" element={<DepartmentForm/>}/>
          <Route path="/departmenthead" element={<DepartmentHead/>}/>
          <Route path="/departmentheadlist" element={<DepartmentHeadList/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
