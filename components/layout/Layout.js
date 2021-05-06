import Nav from './Nav';
import Footer from './Footer';
import Subscribe from './Subscribe';
import WhatsappBtn from '../UI/WahtsappBtn';

import styles from '../../styles/layout/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Nav />
      <main>{children}</main>
      <Subscribe />
      <Footer />
      <WhatsappBtn />
    </div>
  );
};

export default Layout;
