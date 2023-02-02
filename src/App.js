// Router Dom Import
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";

// Component Import
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";

// Style Import
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

// Start
function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Service />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
