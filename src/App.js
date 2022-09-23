import styles from "./App.module.css";
import Inputs from "./inputs/Inputs";
import Selects from "./Selects/Selects";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <h1>სქორინგი</h1>
        <Selects />
        <Inputs />
      </div>
    </div>
  );
}

export default App;
