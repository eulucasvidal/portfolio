import React from 'react';
import styles from '../Header/Header.module.css';
import useMedia from '../../../Hooks/useMedia';
import ImageLogo from '../../../Assets/Img/Svg/logo/logo-black.svg';

const Header = () => {
  const mobile = useMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  React.useEffect(() => {
    if (!mobile) {
      setMobileMenu(false);
    }
  }, [mobile]);

  return (
    <header className={`${styles.headerBg}`}>
      <section className={`${styles.header} container`}>
        <img src={ImageLogo} alt="Logotipo image" />
        <nav>
          {mobile && (
            <button
              aria-label="Menu"
              className={`${styles.navButton} ${
                mobileMenu && styles.navButtonActive
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          )}
          <ul
            className={`${mobile ? styles.headerNavMobile : styles.headerNav} ${
              mobileMenu && styles.headerNavMobileActive
            } links`}
          >
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">projetos</a>
            </li>
            <li>
              <a href="#">sobre</a>
            </li>
            <li>
              <a href="#">contato</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
