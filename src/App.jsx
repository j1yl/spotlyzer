import "./css/App.scss";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import Artist from "./comps/Artist";
import Song from "./comps/Song";
import Genre from "./comps/Genre";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />
        <Hero />
        <Artist />
        <Song />
        <Genre />
        <Footer />
      </div>
    </div>
  );
}

export default App;
