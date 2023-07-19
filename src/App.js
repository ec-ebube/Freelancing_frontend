import './Styles/App.css';
import './Styles/Headers.css';
import './Styles/Home.css';
import './Styles/Loading.css'
import Header from './Neccessary/Header';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import CodingandProgramming from './Components/Categories/CodingandProgramming';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='/' element={<Home />}/>
          <Route path='/category/codingandprogramming' element={<CodingandProgramming />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
