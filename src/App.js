import Navbar from './components/Navbar/Navbar'
import './App.css';
import Header from './components/Header/Header';
import Upsell from './components/Upsell/Upsell';
import Press from './components/Press/Press';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Header />
        <Upsell />
        <Press />
      </div>
    </div>
  );
}

export default App;
