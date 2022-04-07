import Nav from "./Nav";
import Footer from "./Footer";
import WhatsappBtn from "../UI/WahtsappBtn";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsappBtn />
    </div>
  );
};

export default Layout;
