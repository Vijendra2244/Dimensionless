import AsideBar from "./components/Aside/AsideBar";
import LeftContainer from "./components/LeftContainer";
import styles from "./components/MainCss.module.css";

function App() {
  return (
    <>
      <div className={styles.mainApp}>
        <AsideBar />
        <LeftContainer />
      </div>
    </>
  );
}



export default App;
