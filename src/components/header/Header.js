"use client";

import Link from "next/link";
import Image from "next/image";
import Tippy from "@tippyjs/react/headless";
import Popup from "../popup/PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [checkMenu, setCheckMenu] = useState(true);

  const [checkApp, setCheckApp] = useState(false)

  const handleCheckMenu = () => {
    setCheckMenu(!checkMenu);
  };

  const handleCheckApp = () => {
    setCheckApp(!checkApp)
  }

  

  
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header__top">
          <div className="header__top-social">
            <Link href="#">
              <Image
                className="header__top-social_facebook"
                src="/assets/icons/facebook.png"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                className="header__top-social_twitter"
                src="/assets/icons/twitter.png"
                alt="twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                className="header__top-social_telegram"
                src="/assets/icons/telegram.png"
                alt="telegram"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="header__top-language">
            <span className="header__top-language_title">English</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M4.37531 5.66824C4.2931 5.66874 4.2116 5.65215 4.13549 5.61943C4.05938 5.58671 3.99016 5.53849 3.93179 5.47755L0.183713 1.53216C0.0660836 1.40833 0 1.2404 0 1.06528C0 0.890174 0.0660836 0.722236 0.183713 0.598414C0.301342 0.474592 0.460882 0.405029 0.627235 0.405029C0.793588 0.405029 0.953128 0.474592 1.07076 0.598414L4.37531 4.08351L7.67986 0.60499C7.79937 0.497263 7.95308 0.440971 8.1103 0.447363C8.26752 0.453756 8.41665 0.522361 8.5279 0.63947C8.63916 0.756579 8.70433 0.913565 8.7104 1.07906C8.71647 1.24455 8.663 1.40636 8.56066 1.53216L4.81259 5.47755C4.69623 5.59903 4.53919 5.66751 4.37531 5.66824Z"
                fill="#737588"
              />
            </svg>
          </div>
        </div>
        <div className="header__menu">
          <Link href="#">
            <Image
              className="header__menu-logo"
              src="/assets/images/logo.webp"
              alt="logo"
              width={118}
              height={35}
              quality={100}
            />
          </Link>
          <div className="header__menu-action">
            <Tippy interactive render={(attrs) => <Popup></Popup>}>
              <div className="header__menu-action-pricing">
                <span className="header__menu-action-pricing-title">
                  Pricing
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="header__menu-action-pricing-icon"
                />
              </div>
            </Tippy>
            <Tippy
              interactive
              render={(attrs) => (
                <Popup>
                  <div
                    className="header__menu-action-box"
                    tabIndex="-1"
                    {...attrs}
                  >
                    <Link href="#" className="header__menu-action-box-window">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M0 4.25V11.75H10.5V2.9375L0 4.25Z"
                          fill="#112446"
                        />
                        <path
                          d="M12 2.75V11.75H24V1.25L12 2.75Z"
                          fill="#112446"
                        />
                        <path
                          d="M12 13.25V22.25L24 23.75V13.25H12Z"
                          fill="#112446"
                        />
                        <path
                          d="M0 13.25V20.75L10.5 22.0625V13.25H0Z"
                          fill="#112446"
                        />
                      </svg>
                      <span className="header__menu-action-box-window_title">
                        Get it on Windows
                      </span>
                    </Link>

                    <Link href="#" className="header__menu-action-box-mac">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_835_13245)">
                          <path
                            d="M16.6187 0.5C16.6745 0.5 16.7304 0.5 16.7894 0.5C16.9264 2.19253 16.2804 3.45719 15.4952 4.37301C14.7248 5.28251 13.6699 6.1646 11.9637 6.03076C11.8498 4.36247 12.4969 3.19161 13.281 2.27789C14.0082 1.42636 15.3413 0.668621 16.6187 0.5Z"
                            fill="#112446"
                          />
                          <path
                            d="M21.7837 18.1166C21.7837 18.1335 21.7837 18.1482 21.7837 18.1641C21.3042 19.6163 20.6202 20.8609 19.7855 22.016C19.0236 23.0646 18.0899 24.4757 16.4226 24.4757C14.982 24.4757 14.025 23.5494 12.5486 23.5241C10.9867 23.4988 10.1278 24.2987 8.69979 24.5C8.53644 24.5 8.37309 24.5 8.2129 24.5C7.16429 24.3482 6.31802 23.5178 5.7015 22.7695C3.88356 20.5585 2.47874 17.7025 2.21738 14.0476C2.21738 13.6893 2.21738 13.332 2.21738 12.9737C2.32803 10.358 3.59901 8.23124 5.28838 7.20054C6.17996 6.65253 7.40563 6.18566 8.7704 6.39432C9.3553 6.48496 9.95285 6.6852 10.4766 6.88333C10.973 7.07408 11.5937 7.41237 12.1818 7.39446C12.5802 7.38286 12.9764 7.17525 13.378 7.02876C14.5541 6.60405 15.707 6.11715 17.2267 6.34585C19.0531 6.62196 20.3494 7.43345 21.1503 8.68546C19.6053 9.66873 18.3839 11.1505 18.5926 13.6808C18.778 15.9794 20.1144 17.3241 21.7837 18.1166Z"
                            fill="#112446"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_835_13245">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="header__menu-action-box-mac_title">
                        Get it on MacOS
                      </span>
                    </Link>
                  </div>
                </Popup>
              )}
            >
              <div className="header__menu-action-proxys">
                <span className="header__menu-action-proxys-title">
                  Get Proxys
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="header__menu-action-proxys-icon"
                />
              </div>
            </Tippy>

            <Tippy interactive render={(attrs) => <Popup></Popup>}>
              <div className="header__menu-action-locations">
                <span className="header__menu-action-locations-title">
                  Locations
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="header__menu-action-locations-icon"
                />
              </div>
            </Tippy>
            <div className="header__menu-action-resources">
              <Link href="#">Resources</Link>
            </div>
            <div className="header__menu-action-blogs">
              <Link href="#">Blogs</Link>
            </div>
            <div className="header__menu-action-flatforms">
              <Link href="#">The Flatforms</Link>
            </div>
          </div>
          <div className="header__menu-account">
            <div className="header__menu-account-login">
              <Link href="/login">Login</Link>
            </div>
            <button>
              <Link href="/signup">Sign Up</Link>
            </button>
            {/* <Link href="/signup">
            <button className="header__menu-account-signup">Sign Up</button>
          </Link> */}
          </div>

          <div className="header__menu-icon">
            <svg
              onClick={() => handleCheckMenu()}
              className={checkMenu ? "show" : "hide"}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.125 5H1.875C1.18469 5 0.625 4.44031 0.625 3.75C0.625 3.05969 1.18469 2.5 1.875 2.5H18.125C18.8153 2.5 19.375 3.05969 19.375 3.75C19.375 4.44031 18.8153 5 18.125 5Z"
                fill="#112446"
              />
              <path
                d="M18.125 17.5H1.875C1.18469 17.5 0.625 16.9403 0.625 16.25C0.625 15.5597 1.18469 15 1.875 15H18.125C18.8153 15 19.375 15.5597 19.375 16.25C19.375 16.9403 18.8153 17.5 18.125 17.5Z"
                fill="#112446"
              />
              <path
                d="M18.125 11.25H1.875C1.18469 11.25 0.625 10.6903 0.625 10C0.625 9.30969 1.18469 8.75 1.875 8.75H18.125C18.8153 8.75 19.375 9.30969 19.375 10C19.375 10.6903 18.8153 11.25 18.125 11.25Z"
                fill="#112446"
              />
            </svg>

            <svg
              onClick={() => handleCheckMenu()}
              className={!checkMenu ? "show" : "hide"}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.09107 0C0.801854 4.3643e-05 0.524127 0.115122 0.319644 0.319651C-0.103293 0.742676 -0.103293 1.43948 0.319644 1.8625L6.45837 8.00122L0.319644 14.1399C-0.103293 14.563 -0.103293 15.2598 0.319644 15.6828C0.742669 16.1057 1.43947 16.1057 1.86249 15.6828L8.00122 9.54407L14.1399 15.6828C14.563 16.1057 15.2598 16.1057 15.6828 15.6828C16.1057 15.2598 16.1057 14.563 15.6828 14.1399L9.54407 8.00122L15.6828 1.8625C16.1057 1.43948 16.1057 0.742676 15.6828 0.319651C15.4783 0.115122 15.2006 4.3643e-05 14.9114 0C14.6221 4.3643e-05 14.3444 0.115122 14.1399 0.319651L8.00122 6.45837L1.86249 0.319651C1.65801 0.115122 1.38028 4.3643e-05 1.09107 0Z"
                fill="#112446"
              />
            </svg>
          </div>
        </div>

        <div style={checkMenu ? {height: "0"} : {height: "calc(100vh - 70px)"}} className="header__responsive">
          <div className="header__responsive-content">
            <div className="header__responsive-content-box">
              <nav className="header__responsive-content-box-menu">
                <ul>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                  <li>
                    <div className="header__responsive-content-box-menu-link">
                      <div 
                          onClick={() => handleCheckApp()} className="header__responsive-content-box-menu-link-wrap">
                        9Proxy App
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="none"
                        >
                          <path
                            d="M4.37531 4.99999C4.2931 5.00046 4.2116 4.98471 4.13549 4.95362C4.05938 4.92253 3.99016 4.87673 3.93179 4.81883L0.183713 1.07076C0.0660836 0.953128 0 0.793588 0 0.627235C0 0.460882 0.0660836 0.301342 0.183713 0.183713C0.301342 0.0660836 0.460882 0 0.627235 0C0.793588 0 0.953128 0.0660836 1.07076 0.183713L4.37531 3.49451L7.67986 0.18996C7.79937 0.087621 7.95308 0.0341443 8.1103 0.040217C8.26752 0.0462896 8.41665 0.111464 8.5279 0.222716C8.63916 0.333968 8.70433 0.483103 8.7104 0.64032C8.71647 0.797537 8.663 0.951255 8.56066 1.07076L4.81259 4.81883C4.69623 4.93424 4.53919 4.9993 4.37531 4.99999Z"
                            fill="#112446"
                          />
                        </svg>
                      </div>

                      <div style={checkApp ? {height: "84px"} : {height: 0}} className="header__responsive-content-box-menu-link-child">
                        <div>
                          <Link href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                            >
                              <path
                                d="M19.7837 12.1166C19.7837 12.1335 19.7837 12.1482 19.7837 12.1641C19.3042 13.6163 18.6202 14.8609 17.7855 16.016C17.0236 17.0646 16.0899 18.4757 14.4226 18.4757C12.982 18.4757 12.025 17.5494 10.5486 17.5241C8.98671 17.4988 8.1278 18.2987 6.69979 18.5C6.53644 18.5 6.37309 18.5 6.2129 18.5C5.16429 18.3482 4.31802 17.5178 3.7015 16.7695C1.88356 14.5585 0.478739 11.7025 0.217377 8.0476C0.217377 7.68928 0.217377 7.33202 0.217377 6.9737C0.328034 4.35797 1.59901 2.23124 3.28838 1.20054C4.17996 0.652525 5.40563 0.185657 6.7704 0.394325C7.3553 0.484958 7.95285 0.685196 8.47663 0.883325C8.97301 1.07408 9.59374 1.41237 10.1818 1.39446C10.5802 1.38286 10.9764 1.17525 11.378 1.02876C12.5541 0.604047 13.707 0.117154 15.2267 0.345846C17.0531 0.621963 18.3494 1.43345 19.1503 2.68546C17.6053 3.66873 16.3839 5.15048 16.5926 7.68085C16.778 9.97936 18.1144 11.3241 19.7837 12.1166Z"
                                fill="#112446"
                              />
                            </svg>
                            <span>MacOS</span>
                          </Link>
                          <Link href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M0 4.25V11.75H10.5V2.9375L0 4.25Z"
                                fill="#112446"
                              />
                              <path
                                d="M12 2.75V11.75H24V1.25L12 2.75Z"
                                fill="#112446"
                              />
                              <path
                                d="M12 13.25V22.25L24 23.75V13.25H12Z"
                                fill="#112446"
                              />
                              <path
                                d="M0 13.25V20.75L10.5 22.0625V13.25H0Z"
                                fill="#112446"
                              />
                            </svg>
                            <span>Window</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="#">Locations</Link>
                  </li>
                  <li>
                    <Link href="#">Resources</Link>
                  </li>
                  <li>
                    <Link href="#">Solutions</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__responsive-content-auth">
              <Link className="header__responsive-content-auth-signin" href="#">
                Sign In
              </Link>
              <Link className="header__responsive-content-auth-signup" href="#">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="header__responsive-bg"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
