import styles from "./style";
import {Footer, Navbar, EmpTable, Stats } from "./components";

const Expenses = () => (
  <div id="Accountant" className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>   
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`} >
        <Stats />
        <EmpTable />
        <Footer />
      </div>
    </div>
  </div>
);

export default Expenses;
