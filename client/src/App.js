import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import Hand from "./components/Hand/Hand";
import TextInputSection from "./components/TextInputSection/TextInputSection";
import './index.scss'
function App() {
  return (
    <div>
      <Header />
      <TextInputSection />
      <Keyboard />
      <div className="head-section">
      <Hand isLeft={true}/>
      <Hand isLeft={false}/>
      </div>
    </div>
  );
}

export default App;
