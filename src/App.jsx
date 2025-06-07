// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import UnderMaintenance from './UnderMaintenance.jsx'; // Adjust the path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
