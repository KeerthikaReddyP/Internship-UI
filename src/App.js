// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import Header from "./Header.js";

function App() {
  const link1 = [
    {title:"Patients", href:"/"},
    {title:"HR", href:"/"},
    {title:"Lab", href:"/"},
    {title:"Pharma", href:"/"}
  ];
  const link2 = [
    {title:"Registration", href:"/"},
    {title:"Consultation", href:"/"},
    {title:"Tests&Reports", href:"/"},
    {title:"Billing", href:"/"}
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
    </div>
  );
}

export default App;
