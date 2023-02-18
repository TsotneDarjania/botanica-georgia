import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import GiftServices from './components/giftServices/GiftServices';
import Intro from './components/intro/Intro';
import Products from './components/products/Products';

function App() {

  return (
    <div className="App">
      <Intro />
      <About />
      <GiftServices />
      <Products />
      <Footer />
 
    </div>
  );
}

export default App;
