import './Styles/App.css';
import './Styles/Headers.css';
import './Styles/Home.css';
import './Styles/Loading.css'
import './Styles/Categories.css'
import './Styles/Portfolio.css'
import './Styles/CreatePort.css'
import Header from './Neccessary/Header';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import CodingandProgramming from './Components/Categories/CodingandProgramming';
import VideoandAnimation from './Components/Categories/VideoandAnimation';
import GraphicsandDesign from './Components/Categories/GraphicsandDesign';
import ArtsandDrawing from './Components/Categories/ArtsandDrawing';
import MusicandMelody from './Components/Categories/MusicandMelody';
import Modelling from './Components/Categories/Modelling';
import ArchitecturalDesigns from './Components/Categories/ArchitecturalDesigns';
import Influencing from './Components/Categories/Influencing';
import Others from './Components/Categories/Others';
import Portfolio from './Components/Portfolio/Portfolio';
import CreatePortfolio from './Components/Create&LogIns/CreatePortfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='/' element={<Home />} />
          <Route path='/category/codingandprogramming' element={<CodingandProgramming />} />
          <Route path='/category/videoandanimation' element={<VideoandAnimation />} />
          <Route path='/category/graphicsanddesign' element={<GraphicsandDesign />} />
          <Route path='/category/artsanddrawing' element={<ArtsandDrawing />} />
          <Route path='/category/musicandmelody' element={<MusicandMelody />} />
          <Route path='/category/modelling' element={<Modelling />} />
          <Route path='/category/architecturaldesigns' element={<ArchitecturalDesigns />} />
          <Route path='/category/influencing' element={<Influencing />} />
          <Route path='/category/others' element={<Others />} />
          <Route path='/portfolio/:username' element={<Portfolio />} />
          <Route path='/createportfolio' element={<CreatePortfolio />} />
        </Route>

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
