import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/Space-tourism/" element={<Home />} />
          <Route path="/Space-tourism/destination/" element={<Destination />} />
          <Route path="/Space-tourism/crew" element={<Crew />} />
          {/* <Route path="/Space-tourism/technology" element={<Technology />} /> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
