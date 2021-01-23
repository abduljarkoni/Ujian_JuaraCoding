import "./App.css";
import Cekbok from "./components/cekbok/Cekbok";
import Radio from "./components/radio/Radio";
import Essay from "./components/essay/Essay";

function App() {
  return (
    <div className="App">
      <Radio />
      <Cekbok />
      <Essay />
    </div>
  );
}

export default App;
