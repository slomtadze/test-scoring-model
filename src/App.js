import Inputs from "./inputs/Inputs";
import Selects from "./Selects/Selects";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="h-screen w-screen bg-herro-img bg-center bg-cover flex justify-center items-center">
      {/* <div className="w-3/4 h-3/4 bg-white/90 text-center ">
        <h1>სქორინგი</h1>
        <Selects />
        <Inputs />
      </div> */}

      <HomePage />
    </div>
  );
}

export default App;
