import {Routes,Route} from 'react-router-dom'
import './App.css';

import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
   
    <>

    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </>
   
  );
}

export default App;
