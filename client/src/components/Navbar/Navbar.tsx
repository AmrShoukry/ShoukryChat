import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Preferences from './Preferences';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);
  const [isLanguageOpen, toggleLanguage] = useState(false);
  const [isThemeOpen, toggleTheme] = useState(false);
  const [t, i18n] = useTranslation('global');
  const user = useSelector((store) => store.userReducer);

  const handleToggle = (e) => {
    toggleMenu((menu) => !menu);
  };

  const handleLanguageChoice = (e) => {
    toggleLanguage(true);
  };

  const handleThemeChoice = (e) => {
    toggleTheme(true);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-primary to-theme fixed w-full z-50">
        <div className="backdrop-blur-sm background  flex items-center">
          <div className="container mx-auto px-4 flex justify-between flex-wrap items-center gap-2 h-[64px] w-full">
            <Logo />
            <div className="flex gap-8 navItems">
              <div
                className={`gap-8 w-full bg-gradient-to-r from-primary to-theme md:bg-none absolute left-0 top-[64px] md:relative md:top-0 ${
                  menu === true ? 'translate-y-0' : 'translate-y-full-64'
                } md:translate-y-0 transition duration-300`}>
                <ul className="flex flex-col background md:bg-transparent w-full md:flex-row md:w-auto md:gap-8 md:flex">
                  <li className="custom-link">
                    <NavLink to="/">{t('navbar.home')}</NavLink>
                  </li>
                  <li className="custom-link">
                    <NavLink to="/about">{t('navbar.about')}</NavLink>
                  </li>
                  {user.data && (
                    <>
                      <li className="custom-link">
                        <NavLink to="/chats">{t('navbar.chats')}</NavLink>
                      </li>
                      <li className="custom-link">
                        <NavLink to="/profile">{t('navbar.profile')}</NavLink>
                      </li>
                      <li className="custom-link">
                        <NavLink to="/logout">{t('navbar.logout')}</NavLink>
                      </li>
                    </>
                  )}
                  {!user.data && (
                    <>
                      <li className="custom-link">
                        <NavLink to="/login">{t('navbar.login')}</NavLink>
                      </li>
                      <li className="custom-link">
                        <NavLink to="/signup">{t('navbar.signup')}</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <button onClick={(e) => handleThemeChoice(e)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="navSvg"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_27490)">
                    <path
                      d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99023 2V7"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2V4"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_27490">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <button onClick={(e) => handleLanguageChoice(e)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="navSvg"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.06 18.67L16.92 14.4L14.78 18.67"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.17 17.9099H18.69"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.92 22.0001C14.12 22.0001 11.84 19.73 11.84 16.92C11.84 14.12 14.11 11.8401 16.92 11.8401C19.72 11.8401 22 14.11 22 16.92C22 19.73 19.73 22.0001 16.92 22.0001Z"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.00995 5.84985H4.94995"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.96997 5.16992V5.84991"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.98994 5.83997C7.98994 7.58997 6.61994 9.00995 4.93994 9.00995"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
                    stroke="#e00000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="pointer" onClick={(e) => handleToggle(e)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex md:hidden"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 7H21"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.48999 12H21"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12H5.99"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 17H21"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isLanguageOpen && (
        <Preferences toggleLanguage={toggleLanguage} toggleTheme={null} />
      )}
      {isThemeOpen && (
        <Preferences toggleTheme={toggleTheme} toggleLanguage={null} />
      )}
    </>
  );
};

export default Navbar;

