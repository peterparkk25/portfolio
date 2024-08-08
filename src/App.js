import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About_Me/about_me";
import Services from "./Components/Services/services";
import MyWork from "./Components/MyWork/mywork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <MyWork />
    </div>
  );
}

export default App;
