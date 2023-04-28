import styles from "./style";
import { Footer, Navbar } from "./components";
import ExpenseInfo from "./components/ExpenseInfo";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ExpenseInfo/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
