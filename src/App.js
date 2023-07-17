import './Styles/App.css';
import './Styles/Headers.css';
import './Styles/Home.css';
import Header from './Neccessary/Header';
// import HomeOne from './Components/HomeOne';
// import HomeTwo from './Components/HomeTwo';
import Home from './Components/Home';
// import DropCatergory from './Neccessary/DropCatergory';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeOne />
      <HomeTwo /> */}
      <Home />
    </div>
  );
}

export default App;
