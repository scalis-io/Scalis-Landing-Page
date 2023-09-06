import './css/App.css';
import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/400.css"; // Specify weight
import "@fontsource/mulish/400-italic.css"; // Specify weight and style
import React, { useState } from 'react';
import Navbar from './Componentes/navbar.js';
import Footer from './Componentes/Footer.js';
import Sec1 from './For-Employers-1/Componentes-For-Employers-1/sec-1';
import Sec2 from './For-Employers-1/Componentes-For-Employers-1/sec-2';
import Section2 from './Componentes/section-2'


function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <div className="App">
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <section class="sections">
        <Sec1 />
        <Section2 />
        <Sec2 />
      </section>
      <Footer />
    </div>
  );
}

export default App;
