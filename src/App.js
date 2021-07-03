import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import People from "./pages/People";
import About from "./pages/About";
import Operation from "./pages/Operation";
import Reports from "./pages/Reports"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar />
      <switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/People" exact component={People} />
          <Route path="/Operation" exact component={Operation} />
          <Route path="/Reports" exact component={Reports}/>
      </switch>
      </Router>
     
  
    </div>
  );
}

export default App;