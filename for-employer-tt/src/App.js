import './css/App.css';
import React, { useState } from 'react';
import Navbar from './Componentes/navbar.js';
import Footer from './Componentes/Footer.js';
import Sec2 from './For-Employers-1/Componentes-For-Employers-1/sec-2';


function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <div className="App">
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <section class="sections">
        <Sec2 />
      </section>
      <Footer />
    </div>
  );
}

export default App;
