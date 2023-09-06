import './css/App.css';
import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/400.css"; // Specify weight
import "@fontsource/mulish/400-italic.css"; // Specify weight and style
import React, { useState } from 'react';
import Navbar from './Componentes/navbar.js';
import Footer from './Componentes/Footer.js';
import Section1 from './Componentes/section-1';
import Section2 from './Componentes/section-2';
import Section3 from './Componentes/section3';
import Section4 from './Componentes/section-4';
import Section5 from './Componentes/section-5';
import Section6 from './Componentes/section-6';
import Section7 from './Componentes/section-7';
import SearchBt from './Componentes/Search-btt';


function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <div className="App">
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <section class="sections">
        <Section1 />
        <SearchBt />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </section>
      <Footer />
    </div>
  );
}

export default App;
