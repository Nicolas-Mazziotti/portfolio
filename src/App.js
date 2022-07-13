//components
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';



const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
