import React, { useState, useEffect } from 'react';
import nav from './nav.module.css';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import imgI from '../../Assets/photo_1_2025-05-24_13-27-51-removebg-preview.png';

const Nav = ({ scrollToSection, refs }) => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setClick(prev => !prev);

  const handleClick = (section, ref) => {
    setActive(section);
    scrollToSection(ref);
    setClick(false);
  };

  const handleMenuClick = (e) => {
    const tag = e.target.tagName.toLowerCase();
    if (tag === 'a' || tag === 'button') {
      setClick(false);
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);

          const scrollPosition = window.scrollY + 150;
          const sectionKeys = Object.keys(refs);

          for (let key of sectionKeys) {
            const ref = refs[key];
            if (ref?.current) {
              const offsetTop = ref.current.offsetTop;
              const offsetHeight = ref.current.offsetHeight;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActive(key);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (click) {
      html.style.position = 'fixed';
      html.style.width = '100%';
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.position = '';
      html.style.width = '';
      html.style.overflow = '';
      body.style.overflow = '';
    }

    return () => {
      html.style.position = '';
      html.style.width = '';
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [click]);

  return (
    <div>
      <div className={`${nav.nav} ${scrolled ? nav.scrolled : ''}`}>
        <div className={nav.container}>
          <div className={nav.menu}>
            <div className={nav.logo}>
              <Link to='/'><img src={imgI} alt="logo" /></Link>
            </div>

            <ul className={`${nav.menuB} ${click ? nav.active : ''}`} onClick={handleMenuClick}>
              <li><Link to='/' className={active === "home" ? nav.activeLink : ""}>Home</Link></li>
              <li><Link to='/blogpage' className={active === "about" ? nav.activeLink : ""}>Blogs</Link></li>
              <li><Link to='/servicespage' className={active === "faq" ? nav.activeLink : ""}>Our Services</Link></li>
              <li>
                <a
                  href="#"
                  className={active === "contact" ? nav.activeLink : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("contact", refs.contactRef);
                  }}
                >
                  Clients
                </a>
              </li>
              <button><Link to='/register' className={`${nav.btn1} ${active === "contact" ? nav.activeLink : ""}`}>REGISTER</Link></button>
              <button><Link to='/login' className={`${nav.btn2} ${active === "contact" ? nav.activeLink : ""}`}>LOGIN</Link></button>
            </ul>

            <div className={nav.bugger} onClick={toggleMenu}>
              {!click
                ? <CiMenuBurger className={nav.icon} />
                : <AiOutlineClose className={nav.icons} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
