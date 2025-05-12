import './App.css';
import UserInterface from './components/UserInterface';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Register from './components/Register';
import SignIn from './components/SignIn';
import ReclamationList from './components/ReclamationList';

function App() {
  return (
    <Router>
    <div className='container'>
      <NavBar />
      <Routes>
      <Route path="/users" element={<UserInterface  />}></Route>
      <Route path="/register" element={<Register  />}></Route>
      <Route path="/signin" element={<SignIn  />}></Route>
      <Route path="/reclation_list" element={<ReclamationList  />}></Route>
      </Routes>
      {/* <UserInterface /> */}
    </div>
    </Router>
  );
}

export default App;
