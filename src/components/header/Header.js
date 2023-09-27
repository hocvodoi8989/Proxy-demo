"use client";

import Link from "next/link";
import Image from "next/image";
import Tippy from "@tippyjs/react/headless";
import Popup from "../popup/PopUp";

function Header() {
  return (
    <div className="header">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M4.37531 5.66824C4.2931 5.66874 4.2116 5.65215 4.13549 5.61943C4.05938 5.58671 3.99016 5.53849 3.93179 5.47755L0.183713 1.53216C0.0660836 1.40833 0 1.2404 0 1.06528C0 0.890174 0.0660836 0.722236 0.183713 0.598414C0.301342 0.474592 0.460882 0.405029 0.627235 0.405029C0.793588 0.405029 0.953128 0.474592 1.07076 0.598414L4.37531 4.08351L7.67986 0.60499C7.79937 0.497263 7.95308 0.440971 8.1103 0.447363C8.26752 0.453756 8.41665 0.522361 8.5279 0.63947C8.63916 0.756579 8.70433 0.913565 8.7104 1.07906C8.71647 1.24455 8.663 1.40636 8.56066 1.53216L4.81259 5.47755C4.69623 5.59903 4.53919 5.66751 4.37531 5.66824Z" fill="#737588"/>
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
          <Tippy
            interactive
            render={(attrs) => (
              <Popup></Popup>
            )}
          >
            <div className="header__menu-action-pricing">
              <span className="header__menu-action-pricing-title">Pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M4.58283 5.07934C4.50062 5.07981 4.41912 5.06405 4.34301 5.03297C4.2669 5.00188 4.19768 4.95607 4.13931 4.89818L0.391232 1.1501C0.273603 1.03247 0.20752 0.872934 0.20752 0.706581C0.20752 0.540228 0.273603 0.380688 0.391232 0.263059C0.508862 0.145429 0.668402 0.0793457 0.834755 0.0793457C1.00111 0.0793457 1.16065 0.145429 1.27828 0.263059L4.58283 3.57386L7.88738 0.269306C8.00688 0.166967 8.1606 0.11349 8.31782 0.119563C8.47504 0.125635 8.62417 0.19081 8.73542 0.302062C8.84668 0.413314 8.91185 0.562449 8.91792 0.719666C8.92399 0.876883 8.87052 1.0306 8.76818 1.1501L5.0201 4.89818C4.90375 5.01358 4.74671 5.07865 4.58283 5.07934Z" fill="#112446"/>
              </svg>
            </div>
          </Tippy>
          <Tippy
            interactive
            render={(attrs) => (
              <div className="header__menu-action-box" tabIndex="-1" {...attrs}>
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
                    <path d="M12 2.75V11.75H24V1.25L12 2.75Z" fill="#112446" />
                    <path
                      d="M12 13.25V22.25L24 23.75V13.25H12Z"
                      fill="#112446"
                    />
                    <path
                      d="M0 13.25V20.75L10.5 22.0625V13.25H0Z"
                      fill="#112446"
                    />
                  </svg>
                  <span className="header__menu-action-box-window_title">Get it on Windows</span>
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
                  <span className="header__menu-action-box-mac_title">Get it on MacOS</span>
                </Link>
              </div>
            )}
          >
            <div className="header__menu-action-proxys">
              <span className="header__menu-action-proxys-title">
                Get Proxys
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M4.58283 5.07934C4.50062 5.07981 4.41912 5.06405 4.34301 5.03297C4.2669 5.00188 4.19768 4.95607 4.13931 4.89818L0.391232 1.1501C0.273603 1.03247 0.20752 0.872934 0.20752 0.706581C0.20752 0.540228 0.273603 0.380688 0.391232 0.263059C0.508862 0.145429 0.668402 0.0793457 0.834755 0.0793457C1.00111 0.0793457 1.16065 0.145429 1.27828 0.263059L4.58283 3.57386L7.88738 0.269306C8.00688 0.166967 8.1606 0.11349 8.31782 0.119563C8.47504 0.125635 8.62417 0.19081 8.73542 0.302062C8.84668 0.413314 8.91185 0.562449 8.91792 0.719666C8.92399 0.876883 8.87052 1.0306 8.76818 1.1501L5.0201 4.89818C4.90375 5.01358 4.74671 5.07865 4.58283 5.07934Z" fill="#112446"/>
              </svg>
            </div>
          </Tippy>

          <Tippy
            interactive
            render={(attrs) => (
              <Popup></Popup>
            )}
          >
            <div className="header__menu-action-locations">
              <span className="header__menu-action-locations-title">
                Locations
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M4.58283 5.07934C4.50062 5.07981 4.41912 5.06405 4.34301 5.03297C4.2669 5.00188 4.19768 4.95607 4.13931 4.89818L0.391232 1.1501C0.273603 1.03247 0.20752 0.872934 0.20752 0.706581C0.20752 0.540228 0.273603 0.380688 0.391232 0.263059C0.508862 0.145429 0.668402 0.0793457 0.834755 0.0793457C1.00111 0.0793457 1.16065 0.145429 1.27828 0.263059L4.58283 3.57386L7.88738 0.269306C8.00688 0.166967 8.1606 0.11349 8.31782 0.119563C8.47504 0.125635 8.62417 0.19081 8.73542 0.302062C8.84668 0.413314 8.91185 0.562449 8.91792 0.719666C8.92399 0.876883 8.87052 1.0306 8.76818 1.1501L5.0201 4.89818C4.90375 5.01358 4.74671 5.07865 4.58283 5.07934Z" fill="#112446"/>
              </svg>
            </div>
          </Tippy>
          <div className="header__menu-action-resources"><Link href="#">Resources</Link></div>
          <div className="header__menu-action-blogs"><Link href="#">Blogs</Link></div>
          <div className="header__menu-action-flatforms"><Link href="#">The Flatforms</Link></div>
        </div>
        <div className="header__menu-account">
          <div className="header__menu-account-login"><Link href="/login">Login</Link></div>
          <Link href="/signup">
            <button className="header__menu-account-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
