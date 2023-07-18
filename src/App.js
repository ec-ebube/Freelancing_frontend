import './Styles/App.css';
import './Styles/Headers.css';
import './Styles/Home.css';
import './Styles/Loading.css'
import Header from './Neccessary/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
