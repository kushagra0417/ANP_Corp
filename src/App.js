//components
import Temp from "./components/Temp";

// Hoc
import HomeLayoutHOC from "./HOC/Home.Hoc";


//pages
import Mainpage from "./pages/Mainpage";


function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={Mainpage} />
    </>
  );
}

export default App;
