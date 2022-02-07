import React from 'react';
import './index.css';
import  { Route, Routes} from "react-router-dom";
import  Index  from './components/Index';
import  Step1  from './components/Steps/Step1/Step1';
import Step2  from './components/Steps/Step2/Step2';
import Step3  from './components/Steps/Step3/Step3';
import Step4  from './components/Steps/Step4/Step4';


export default function App() {
  return (
   
    <Routes>
   
        <Route exact path="/" element={<Index />} />
        <Route exact path="/step1" element={<Step1 />} />
        <Route exact path="/step2" element={<Step2 />} />
        <Route exact path="/step3" element={<Step3 />} />
        <Route exact path="/step4" element={<Step4 />} />
   
      
    </Routes>
 

  );
}


