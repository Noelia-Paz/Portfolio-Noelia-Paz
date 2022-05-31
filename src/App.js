import "bootstrap/scss/bootstrap.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Works />
      <ContactMe />
    </div>
  );
}

export default App;
