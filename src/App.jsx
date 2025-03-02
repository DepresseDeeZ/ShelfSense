import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/navbar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
// import ToolImages from './Pages/ToolImages.jsx';
// import Sheets from './Pages/Sheets.jsx';
// import ToolManagement from './Pages/ToolManagement.jsx';
// import ToolProduction from './Pages/ToolProduction.jsx';
// import ProductionOrder from './Pages/ProductionOrder.jsx';
// import User from './Pages/User.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/toolimages" element={<ToolImages />} /> */}
        {/* <Route path="/sheets" element={<Sheets />} />
        <Route path="/toolmanagement" element={<ToolManagement />} />
        <Route path="/toolproduction" element={<ToolProduction />} />
        <Route path="/productionorder" element={<ProductionOrder />} />
        <Route path="/user" element={<User />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
