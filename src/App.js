import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import About from "./components/About";
import { Services } from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <About/>
      <Services/>
      <Timeline />
     </>
  );
}

export default App;
