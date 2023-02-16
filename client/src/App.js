import "./App.css";
import "./components/css/styles.css";
import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import CommandSet from "./components/CommandSet";
import HomeComponent from "./components/home/HomeComponent";
import Temp from "./components/Temp";

function App() {
  return (
    <div className="body-component">
      <NavbarComponent />
      <HomeComponent />
      <Temp/>
      <FormComponent />
      <CommandSet />
    </div>
  );
}

export default App;
