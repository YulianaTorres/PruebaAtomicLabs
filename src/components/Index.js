import React from 'react';
import Principalpage from './views/Welcome/Principalpage';
import Navbar from './views/Navbar/Navbar';
import Services from './views/Services/Services';
import Team from './views/Workwithus/Team';
import Caracteristicas from './views/Caracteristicas/Caracteristicas';
import Atomic from './views/Atomic/Atomic';
import Footer from './views/Footer/Footer';


export default function App() {
  return (
    <div>
      <Navbar />
      <Principalpage />
      <Services />
      <Team />
      <Atomic />
     <Caracteristicas />
     <Footer />
   
    </div>
   
  );
}