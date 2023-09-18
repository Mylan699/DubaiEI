import Companies from "./components/Partenaires/Companies";
import Header from "./components/EnTete/Header";
import Hero from "./components/EnTeteBis/Hero";
import Job from "./components/Job/Job";
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
      <Job/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;
