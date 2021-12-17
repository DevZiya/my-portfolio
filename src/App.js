import { useSelector } from 'react-redux';
import './app.scss'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

function App() {
    const dark = useSelector(state=>state.dark.darked)
  return (
    <div className={!dark ?  'app' : 'app dark'}>
     <Toggle />
     <Intro />
     <About />
     <ProductList />
     <Contact />
    </div>
  );
}

export default App;
