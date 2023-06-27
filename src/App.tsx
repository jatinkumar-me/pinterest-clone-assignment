import Navbar from "./components/navbar/Navbar";
import PinGrid from "./components/pingrid/PinGrid";
import "./global.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <PinGrid />
    </>
  );
};

export default App;
