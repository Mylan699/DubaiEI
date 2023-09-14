import Companies from "./components/Partenaires/Companies";
import Header from "./components/EnTete/Header";
import Hero from "./components/EnTeteBis/Hero";
import Residencies from "./components/Residences/Residencies";
import Value from "./components/Valeur/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/Demarrer/GetStarted";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div classNam="App">

      <div>    
        <Header/>
         <Hero/>      
      </div>

      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;
