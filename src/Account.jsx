import styles from "./style";
import {LatestExpenses, Footer, Navbar, AccountEdit, AccountInfo } from "./components";

const Account = () => (
  <div id="Accountant" className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AccountInfo />
        <AccountEdit />
        <LatestExpenses />
      <Footer />
      </div>
    </div>
  </div>
);

export default Account;
