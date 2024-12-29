import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}> 
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
    </div>
  );
}

export default HomePage;
