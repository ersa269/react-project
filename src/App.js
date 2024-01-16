import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
