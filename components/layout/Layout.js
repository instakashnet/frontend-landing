import { useRouter } from 'next/router';
import WhatsappBtn from '../UI/whatsapp.component';
import Footer from './Footer';
import styles from './Layout.module.scss';
import Nav from './Nav';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.app}>
      <Nav />
      <main>{children}</main>
      <Footer pathname={router.pathname} />
      {/* <WhatsappBtn /> */}
    </div>
  );
};

export default Layout;
