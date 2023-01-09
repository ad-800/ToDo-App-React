import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import EditTasks from './tasks/EditTasks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTasks from './tasks/AddTasks';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<AddTasks />} />
          <Route exact path='/task/:id' element={<EditTasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
