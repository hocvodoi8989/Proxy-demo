import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";

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
          <FontAwesomeIcon
            className="header__top-language_icon"
            icon={faChevronDown}
          />
        </div>
      </div>
      <div className="header__menu">
        <Link href="#">
          <Image
            className="header__menu_logo"
            src="/assets/images/logo.png"
            alt="logo"
            width={118}
            height={35}
          />
        </Link>
        <div className="header__menu_action">
          <div className="header__menu_action-pricing">
            <span className="header__menu_action-pricing-title">Pricing</span>
            <FontAwesomeIcon
              className="header__menu_action-icon"
              icon={faChevronDown}
            />
          </div>
          <div className="header__menu_action-proxys">
            <span className="header__menu_action-proxys-title">Get Proxys</span>
            <FontAwesomeIcon
              className="header__menu_action-icon"
              icon={faChevronDown}
            />
          </div>
          <div className="header__menu_action-locations">
            <span className="header__menu_action-locations-title">Locations</span>
            <FontAwesomeIcon
              className="header__menu_action-icon"
              icon={faChevronDown}
            />
          </div>
          <div className="header__menu_action-resources">Resources</div>
          <div className="header__menu_action-blogs">Blogs</div>
          <div className="header__menu_action-flatforms">The Flatforms</div>
        </div>
        <div className="header__menu_account">
          <div>Login</div>
          {/* <Button to="/signup">Sign Up</Button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
