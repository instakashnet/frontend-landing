import WhatsappBtn from "../UI/whatsapp.component";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import Nav from "./Nav";

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
