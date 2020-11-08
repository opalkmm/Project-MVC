// import logo from "./logo.svg";
import "./App.css";
// import GridExampleContainer from "./Components/CardContainer.js";
import SideBarMenu from "./Components/SideBar";
import Navbar from "./Components/Navbar.js";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBarMenu />
    </div>
  );
}

export default App;
