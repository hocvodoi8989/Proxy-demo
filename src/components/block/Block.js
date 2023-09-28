

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Block() {
    return ( 
        <section className="block">
        <div className="wrapper">
          <div className="block__proxy">
            <div className="block__proxy-top">
              <Image
                className="block__proxy-top-image"
                src="/assets/images/computer-image.webp"
                alt="computer"
                width={597}
                height={505}
                quality={100}
              />
              <div className="block__proxy-top-content">
                <h1 className="block__proxy-top-content-title">
                  {`Ultra-Fast & Reliable Residential Proxies Network At Scale`}
                </h1>
                <div className="block__proxy-top-content-text">
                  At 9Proxy, we leverage our extensive partnerships to deliver
                  comprehensive proxy solutions for any requirement. Whether you
                  need proxies for data collection or a full-fledged proxy
                  network, there’s always a perfect proxy plan for every
                  business at any stage of growth.
                </div>
                <div className="block__proxy-top-content-option">
                  <div className="block__proxy-top-content-option-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="40"
                      viewBox="0 0 36 40"
                      fill="none"
                    >
                      <path
                        d="M35.2286 5.59821C35.1568 5.08247 34.7857 4.65824 34.2841 4.51881L18.2073 0.0478435C17.9781 -0.0159478 17.736 -0.0159478 17.5066 0.0478435L1.42982 4.51881C0.928208 4.65824 0.557138 5.0823 0.485329 5.59821C0.392083 6.26871 -1.73516 22.1113 3.72108 29.9924C9.17088 37.8642 17.2105 39.8815 17.55 39.9636C17.6509 39.988 17.7538 40 17.8569 40C17.9601 40 18.063 39.9878 18.1639 39.9636C18.5036 39.8815 26.5432 37.8642 31.9928 29.9924C37.4491 22.1114 35.3218 6.26889 35.2286 5.59821Z"
                        fill="#2DF5C4"
                      />
                      <path
                        d="M26.2887 14.1756C25.7727 13.6589 24.9348 13.6592 24.4182 14.1756L15.9996 22.5945L12.2579 18.8528C11.7412 18.3362 10.9037 18.3362 10.387 18.8528C9.87035 19.3695 9.87035 20.207 10.387 20.7237L15.0639 25.4006C15.3221 25.6588 15.6606 25.7882 15.9992 25.7882C16.3378 25.7882 16.6766 25.6591 16.9348 25.4006L26.2887 16.0464C26.8054 15.5301 26.8054 14.6922 26.2887 14.1756Z"
                        fill="#123B6E"
                      />
                    </svg>
                    <div className="block__proxy-top-content-option-left-title">
                      Enhanced Security Options:
                    </div>
                    <div className="block__proxy-top-content-option-left-text">
                      Experience the ultimate in online protection with HTTP,
                      fully encrypted HTTPS, or fast SOCKS5 protocol.
                    </div>
                  </div>
                  <div className="block__proxy-top-content-option-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3035_5941)">
                        <path
                          d="M28.2031 31.7969C28.2031 27.2737 24.5232 23.5938 20 23.5938C15.4768 23.5938 11.7969 27.2737 11.7969 31.7969C11.7969 36.3201 15.4768 40 20 40C24.5232 40 28.2031 36.3201 28.2031 31.7969ZM21.1719 31.7969C21.1719 32.4441 20.6472 32.9688 20 32.9688C19.3528 32.9688 18.8281 32.4441 18.8281 31.7969V27.1094C18.8281 26.4622 19.3528 25.9375 20 25.9375C20.6472 25.9375 21.1719 26.4622 21.1719 27.1094V31.7969Z"
                          fill="#2DF5C4"
                        />
                        <path
                          d="M20 21.25C20.6472 21.25 21.1719 20.7253 21.1719 20.0781C21.1719 19.4309 20.6472 18.9062 20 18.9062C19.3528 18.9062 18.8281 19.4309 18.8281 20.0781C18.8281 20.7253 19.3528 21.25 20 21.25Z"
                          fill="#2DF5C4"
                        />
                        <path
                          d="M32.3023 9.76224C30.0993 6.45778 27.9111 4.45341 27.819 4.36973C27.0663 3.68544 25.859 4.2195 25.859 5.23677C25.859 9.92622 24.6123 10.3145 23.2234 10.3145C22.3971 10.3145 21.6544 9.92278 21.0758 9.18161C19.8185 7.5713 19.5493 4.68427 20.3557 1.45872C20.5968 0.494266 19.6029 -0.31339 18.7082 0.119891C18.5496 0.196688 14.78 2.0438 10.9755 5.78817C8.72981 7.99849 6.93763 10.4158 5.64888 12.9729C4.02677 16.1915 3.20435 19.6338 3.20435 23.2042C3.20435 27.6905 4.95138 31.9083 8.12372 35.0805C9.03669 35.9935 10.0367 36.7877 11.1043 37.4569C10.0593 35.8206 9.4531 33.8783 9.4531 31.7968C9.4531 29.3104 10.3186 27.0225 11.7633 25.2175L10.8849 24.339C10.4272 23.8814 10.4272 23.1394 10.8849 22.6818C11.3425 22.2241 12.0845 22.2241 12.5422 22.6818L13.4206 23.5602C14.4405 22.7439 15.6146 22.1126 16.8915 21.7178C16.632 21.2279 16.4843 20.67 16.4843 20.0781C16.4843 18.1396 18.0615 16.5625 20 16.5625C21.9385 16.5625 23.5156 18.1396 23.5156 20.0781C23.5156 20.67 23.3679 21.2279 23.1084 21.7178C24.3854 22.1126 25.5594 22.7438 26.5793 23.5602L27.4577 22.6818C27.9154 22.2242 28.6573 22.2242 29.115 22.6818C29.5726 23.1395 29.5726 23.8815 29.115 24.3391L28.2366 25.2175C29.6814 27.0225 30.5468 29.3104 30.5468 31.7968C30.5468 33.8783 29.9406 35.8206 28.8957 37.457C29.9633 36.7878 30.9633 35.9936 31.8763 35.0806C35.0486 31.9083 36.7957 27.6906 36.7957 23.2043C36.7957 18.8198 35.2418 14.1716 32.3023 9.76224Z"
                          fill="#2DF5C4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3035_5941">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="block__proxy-top-content-option-right-title">
                      Break Free from Limitations:
                    </div>
                    <div className="block__proxy-top-content-option-right-text">
                      Bypass CAPTCHAs, geo-blocks, and IP bans with 50M+ proxies
                      from 195+ locations
                    </div>
                  </div>
                </div>
                <div className="block__proxy-top-content-btn">
                  <button className="block__proxy-top-content-btn-black">
                    <Link
                      href="#"
                      className="block__proxy-top-content-btn-black-link"
                    >
                      <span>Learn More</span>
                      <FontAwesomeIcon icon={faChevronRight} className="block__proxy-top-content-btn-black-icon" />
                    </Link>
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="block__proxy-bot">
              <div className="block__proxy-bot-content">
                <h1 className="block__proxy-bot-content-title">
                  Looking For Full Scraping Freedom?
                </h1>
                <div className="block__proxy-bot-content-text">
                  <div className="block__proxy-bot-content-text-bar"></div>
                  <div className="block__proxy-bot-content-text-child">
                    <div className="block__proxy-bot-content-text-child-head">
                      Safe & Anonymous
                    </div>
                    <div className="block__proxy-bot-content-text-child-body">
                      {`With 9Proxy, you'll blend in with the crowd like a
                      chameleon. Our residential proxies come from real ISPs and
                      home users, making sure you never get detected or blocked.
                      No more vague geolocation data – with 9Proxy, accuracy is
                      always on point.`}
                    </div>
                  </div>
                </div>
                <div className="block__proxy-bot-content-item">
                  <div></div>
                  <span>Unlimited concurrent sessions</span>
                </div>
                <div className="block__proxy-bot-content-item">
                  <div></div>
                  <span>Hassle-free integration for a smooth start</span>
                </div>
                <div className="block__proxy-bot-content-item">
                  <div></div>
                  <span>Get More Done, for Less:</span>
                </div>
                <button className="block__proxy-bot-content-btn">
                  <Link href="#" className="block__proxy-bot-content-btn-link">
                    <span>Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </button>
              </div>
              <Image
                className="block__proxy-bot-image"
                src="/assets/images/people-image.webp"
                alt="people"
                width={690}
                height={470}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
      
     );
}

export default Block