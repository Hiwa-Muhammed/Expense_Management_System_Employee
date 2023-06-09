import styles from "./style";
import { CTA, Footer, Navbar } from "./components";

const Accountant = () => (
  <div id="Accountant" className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <AddExpenseComponent />
      <Footer />
      </div>
    </div>
  </div>
);

export default Accountant;
