// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import Header from "./Header.js";
import Maincontent from "./Maincontent.js";

function App() {
  const link1 = [
    {title:"Patients", href:"/", image:"../images/patient.png"},
    {title:"HR", href:"/", image:"../images/hr.png"},
    {title:"Lab", href:"/", image:"../images/labs.png"},
    {title:"Pharma", href:"/", image:"../images/pharma.png"}
  ];
  const link2 = [
    {title:"Registration", href:"/", image:"../images/registration.png"},
    {title:"Consultation", href:"/", image:"../images/logo2.png"},
    {title:"Tests&Reports", href:"/", image:"../images/logo3.png"},
    {title:"Billing", href:"/", image:"../images/consultation.png"}
  ];
  return (
    <div className="App">
      <Header />
      <div className="sidebar">
        Dashboard
        <NavBar links={link1} />
        Processes
        <NavBar links={link2} />
      </div>
      <Maincontent />
    </div>
  );
}

export default App;
