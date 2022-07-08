//components
import Header  from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Header/>
    </Router>
    </>
  );
}

export default App;
