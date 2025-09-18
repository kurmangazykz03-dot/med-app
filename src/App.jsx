import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainActivity from './pages/MainActivity'
import Available from './pages/Available'
import  Bluetooth  from './pages/Bluetooth'
import  Pager  from './pages/Pager'
import Temperature  from './pages/Temperature'


function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🏠 Home Page</h1>
      <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded-xl">
        Go to About Page
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">ℹ️ About Page</h1>
      <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-xl">
        Back to Home
      </Link>
    </div>
  );
}

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