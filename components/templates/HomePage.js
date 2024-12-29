import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
    </div>
  );
}

export default HomePage;
