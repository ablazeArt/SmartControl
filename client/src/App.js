import "./App.css";
import "./components/css/styles.css";
import NavbarComponent from "./components/NavbarComponent";
import CommandSet from "./components/CommandSet";
import HomeComponent from "./components/home/HomeComponent";
import Temp from "./components/Temp";
import FormTempComponent from "./components/FormCommand/FormTemptCommand/FormTempComponent";

function App() {
  return (
    <body className="body-main">
      <div className="body-component">
        <NavbarComponent />
        <HomeComponent />
        <Temp />
        <CommandSet />
        <FormTempComponent />
      </div>
    </body>
  );
}

export default App;
