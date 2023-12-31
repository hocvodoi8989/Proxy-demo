"use client";

import { faApple, faLinux, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="footer">
      <div className="wrapper">
        <div className="footer__proxy">
          <div className="footer__proxy-info">
            <div className="footer__proxy-info-wrap">
              <Link href="#">
                <Image
                  className="footer__proxy-info-wrap-logo"
                  src="/assets/images/logo-footer.webp"
                  alt="logo"
                  width={118}
                  height={35}
                  quality={100}
                ></Image>
              </Link>
              <p className="footer__proxy-info-wrap-text">
                Connect people interested in buying, selling, and renting
                properties. Helping IT sector to make safer.
              </p>
              <div className="footer__proxy-info-wrap-social">
                <Link href="#" className="footer__proxy-info-wrap-social-facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4999_1146)">
                      <path
                        d="M15 0C6.72903 0 0 6.72903 0 15C0 23.2704 6.72903 30 15 30C23.2704 30 30 23.2704 30 15C30 6.72903 23.2716 0 15 0ZM18.7304 15.5281H16.29V24.2262H12.6738C12.6738 24.2262 12.6738 19.4735 12.6738 15.5281H10.9548V12.4539H12.6738V10.4654C12.6738 9.04133 13.3505 6.81604 16.3232 6.81604L19.0029 6.82631V9.81048C19.0029 9.81048 17.3745 9.81048 17.0579 9.81048C16.7413 9.81048 16.2912 9.96878 16.2912 10.6479V12.4545H19.0464L18.7304 15.5281Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4999_1146">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="#" className="footer__proxy-info-wrap-social-twitter" style={{ margin: "0 15px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4999_1150)">
                      <path
                        d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30 15C30 6.717 23.283 0 15 0ZM21.8488 11.6954C21.8555 11.843 21.8587 11.9913 21.8587 12.1404C21.8587 16.6898 18.3957 21.936 12.0628 21.9363C10.1184 21.9363 8.3091 21.3663 6.78543 20.3897C7.05482 20.4215 7.32903 20.4373 7.60666 20.4373C9.21982 20.4373 10.7043 19.8871 11.8829 18.9635C10.3757 18.9356 9.10492 17.9402 8.66638 16.5722C8.87627 16.6125 9.0921 16.6344 9.31343 16.6344C9.62769 16.6344 9.9321 16.5921 10.2214 16.5131C8.64601 16.1977 7.45926 14.8055 7.45926 13.1383C7.45926 13.1227 7.45926 13.1087 7.45972 13.0943C7.92366 13.3523 8.45421 13.5075 9.01909 13.5249C8.09464 12.908 7.48695 11.8536 7.48695 10.659C7.48695 10.0282 7.65747 9.43726 7.95319 8.92845C9.65103 11.0117 12.1884 12.3818 15.0499 12.5258C14.9908 12.2736 14.9604 12.0108 14.9604 11.7407C14.9604 9.84009 16.5024 8.29811 18.4037 8.29811C19.3941 8.29811 20.2885 8.71674 20.9168 9.38599C21.7012 9.23126 22.4377 8.9447 23.1031 8.55034C22.8456 9.35394 22.3 10.0282 21.5891 10.4546C22.2855 10.3713 22.9493 10.1866 23.5661 9.91241C23.1054 10.603 22.5211 11.2095 21.8488 11.6954Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4999_1150">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="#" className="footer__proxy-info-wrap-social-telegram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4999_1152)">
                      <path
                        d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4999_1152">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__proxy-wrap">
            <div className="footer__proxy-wrap-services">
              <h2>Proxy Services</h2>
              <ul>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">API</Link></li>
                <li><Link href="#">User + Pass Auth</Link></li>
                <li><Link href="#">9Proxy Manager</Link></li>
              </ul>
            </div>
            <div className="footer__proxy-wrap-locations">
              <h2>Top Locations</h2>
              <ul>
                <li><Link href="#">United States</Link></li>
                <li><Link href="#">Britain</Link></li>
                <li><Link href="#">Canada</Link></li>
                <li><Link href="#">India</Link></li>
                <li><Link href="#">Brazil</Link></li>
                <li><Link href="#">Japan</Link></li>
                <li><Link href="#">South Korea</Link></li>
              </ul>
            </div>
            <div className="footer__proxy-wrap-resources">
              <h2>Resources</h2>
              <ul>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Proxy Guides</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer__proxy-wrap-dowload">
            <h2>Download App</h2>
            <div className="footer__proxy-wrap-dowload-btns">
              <button className="footer__proxy-wrap-dowload-btns-btn1">
                <Link href="#" className="footer__proxy-wrap-dowload-btns-btn1-link">
                  <FontAwesomeIcon icon={faWindows} className="footer__proxy-wrap-dowload-btns-btn1-link-icon" />
                  <span>Windows</span>
                </Link>
              </button>
              <button className="footer__proxy-wrap-dowload-btns-btn2">
                <Link href="#" className="footer__proxy-wrap-dowload-btns-btn2-link">
                  <FontAwesomeIcon icon={faApple} className="footer__proxy-wrap-dowload-btns-btn2-link-icon" />
                  <span>MacOS</span>
                </Link>
              </button>
              {/* <button className="footer__proxy-wrap-dowload-btns-btn3">
                <Link href="#" className="footer__proxy-wrap-dowload-btns-btn3-link">
                  <FontAwesomeIcon icon={faLinux} className="footer__proxy-wrap-dowload-btns-btn3-link-icon" />
                  <span>Linux</span>
                </Link>
              </button> */}
            </div>
            
          </div>
        </div>
        <div className="footer__copyright">
            <span>Copyright © 2023 9Proxy. All Right Reserved.</span>
            <div className="footer__copyright-languages">
                <span>English</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M4.37531 6.20843C4.2931 6.20894 4.2116 6.19209 4.13549 6.15885C4.05938 6.12561 3.99016 6.07663 3.93179 6.01472L0.183713 2.007C0.0660836 1.88122 0 1.71063 0 1.53275C0 1.35487 0.0660836 1.18428 0.183713 1.0585C0.301342 0.932722 0.460882 0.862061 0.627235 0.862061C0.793588 0.862061 0.953128 0.932722 1.07076 1.0585L4.37531 4.59866L7.67986 1.06518C7.79937 0.955752 7.95308 0.89857 8.1103 0.905064C8.26752 0.911557 8.41665 0.981247 8.5279 1.10021C8.63916 1.21916 8.70433 1.37863 8.7104 1.54674C8.71647 1.71485 8.663 1.87922 8.56066 2.007L4.81259 6.01472C4.69623 6.13812 4.53919 6.20769 4.37531 6.20843Z" fill="white"/>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
