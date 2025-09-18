import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainActivity from './pages/MainActivity'
import Available from './pages/Available'
import  Bluetooth  from './pages/Bluetooth'
import  Pager  from './pages/Pager'
import Temperature  from './pages/Temperature'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainActivity />} />
        <Route path="/available" element={<Available />} />
        <Route path="/bluetooth" element={<Bluetooth />} />
        <Route path="/pager" element={<Pager />} />
        <Route path="/temperature" element={< Temperature/>} />

      </Routes> 
    </Router>
  );
}