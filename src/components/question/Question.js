"use client";

import { useState } from "react";

function Question() {
  const objectFAQs = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
  };

  const [checkFAQs, setCheckFAQs] = useState(objectFAQs);

  const handleCheckFAQs = (number) => {
    switch (Number(number)) {
      case 1:
        setCheckFAQs({ ...objectFAQs, one: true });
        break;
      case 2:
        setCheckFAQs({ ...objectFAQs, two: true });
        break;
      case 3:
        setCheckFAQs({ ...objectFAQs, three: true });
        break;
      case 4:
        setCheckFAQs({ ...objectFAQs, four: true });
        break;
      case 5:
        setCheckFAQs({ ...objectFAQs, five: true });
        break;
      case 6:
        setCheckFAQs({ ...objectFAQs, six: true });
        break;
      case 7:
        setCheckFAQs({ ...objectFAQs, seven: true });
        break;
      case 8:
        setCheckFAQs({ ...objectFAQs, eight: true });
        break;
      case 0:
        setCheckFAQs({ ...objectFAQs });
        break;
      default:
        setCheckFAQs({ ...objectFAQs });
    }
  };

  if (checkFAQs.one) {
  }

  return (
    <section className="question">
      <div className="wrapper">
        <div className="question__feedback">
          <h1 className="question__feedback-head">Hear from happy customers</h1>
          <div className="question__feedback-wrap">
            <div className="question__feedback-wrap-content">
              <div className="question__feedback-wrap-content-arrowleft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.4869 8.24847L3.31209 8.24847L5.78035 5.78018C6.48934 5.07121 5.42586 4.00779 4.71688 4.71676L2.46895 6.96818L0.96834 8.47114C0.677509 8.76371 0.677509 9.23621 0.96834 9.52877L4.71688 13.2817C4.85949 13.4282 5.0558 13.5105 5.26033 13.5088C5.93548 13.5087 6.26682 12.6863 5.78035 12.2182L3.30623 9.74988L16.5257 9.74988C17.5655 9.69829 17.4879 8.19671 16.4869 8.24847Z"
                    fill="#112446"
                  />
                </svg>
              </div>
              <div className="question__feedback-wrap-content-star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6945 8.59371L14.8013 12.3887L15.7207 17.7487C15.7607 17.9831 15.6645 18.22 15.472 18.36C15.3632 18.4393 15.2338 18.4793 15.1045 18.4793C15.0051 18.4793 14.9051 18.4556 14.8138 18.4075L10.0001 15.8768L5.18697 18.4068C4.97697 18.5181 4.72135 18.5 4.52885 18.3593C4.33635 18.2193 4.2401 17.9825 4.2801 17.7481L5.19947 12.3881L1.30572 8.59371C1.13572 8.42746 1.07385 8.17871 1.1476 7.95309C1.22135 7.72746 1.41697 7.56184 1.6526 7.52746L7.03322 6.74621L9.43947 1.86996C9.6501 1.44309 10.3501 1.44309 10.5607 1.86996L12.967 6.74621L18.3476 7.52746C18.5832 7.56184 18.7788 7.72684 18.8526 7.95309C18.9263 8.17934 18.8645 8.42684 18.6945 8.59371Z"
                    fill="#267EEC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6945 8.59371L14.8013 12.3887L15.7207 17.7487C15.7607 17.9831 15.6645 18.22 15.472 18.36C15.3632 18.4393 15.2338 18.4793 15.1045 18.4793C15.0051 18.4793 14.9051 18.4556 14.8138 18.4075L10.0001 15.8768L5.18697 18.4068C4.97697 18.5181 4.72135 18.5 4.52885 18.3593C4.33635 18.2193 4.2401 17.9825 4.2801 17.7481L5.19947 12.3881L1.30572 8.59371C1.13572 8.42746 1.07385 8.17871 1.1476 7.95309C1.22135 7.72746 1.41697 7.56184 1.6526 7.52746L7.03322 6.74621L9.43947 1.86996C9.6501 1.44309 10.3501 1.44309 10.5607 1.86996L12.967 6.74621L18.3476 7.52746C18.5832 7.56184 18.7788 7.72684 18.8526 7.95309C18.9263 8.17934 18.8645 8.42684 18.6945 8.59371Z"
                    fill="#267EEC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6945 8.59371L14.8013 12.3887L15.7207 17.7487C15.7607 17.9831 15.6645 18.22 15.472 18.36C15.3632 18.4393 15.2338 18.4793 15.1045 18.4793C15.0051 18.4793 14.9051 18.4556 14.8138 18.4075L10.0001 15.8768L5.18697 18.4068C4.97697 18.5181 4.72135 18.5 4.52885 18.3593C4.33635 18.2193 4.2401 17.9825 4.2801 17.7481L5.19947 12.3881L1.30572 8.59371C1.13572 8.42746 1.07385 8.17871 1.1476 7.95309C1.22135 7.72746 1.41697 7.56184 1.6526 7.52746L7.03322 6.74621L9.43947 1.86996C9.6501 1.44309 10.3501 1.44309 10.5607 1.86996L12.967 6.74621L18.3476 7.52746C18.5832 7.56184 18.7788 7.72684 18.8526 7.95309C18.9263 8.17934 18.8645 8.42684 18.6945 8.59371Z"
                    fill="#267EEC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6945 8.59371L14.8013 12.3887L15.7207 17.7487C15.7607 17.9831 15.6645 18.22 15.472 18.36C15.3632 18.4393 15.2338 18.4793 15.1045 18.4793C15.0051 18.4793 14.9051 18.4556 14.8138 18.4075L10.0001 15.8768L5.18697 18.4068C4.97697 18.5181 4.72135 18.5 4.52885 18.3593C4.33635 18.2193 4.2401 17.9825 4.2801 17.7481L5.19947 12.3881L1.30572 8.59371C1.13572 8.42746 1.07385 8.17871 1.1476 7.95309C1.22135 7.72746 1.41697 7.56184 1.6526 7.52746L7.03322 6.74621L9.43947 1.86996C9.6501 1.44309 10.3501 1.44309 10.5607 1.86996L12.967 6.74621L18.3476 7.52746C18.5832 7.56184 18.7788 7.72684 18.8526 7.95309C18.9263 8.17934 18.8645 8.42684 18.6945 8.59371Z"
                    fill="#267EEC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6945 8.59371L14.8013 12.3887L15.7207 17.7487C15.7607 17.9831 15.6645 18.22 15.472 18.36C15.3632 18.4393 15.2338 18.4793 15.1045 18.4793C15.0051 18.4793 14.9051 18.4556 14.8138 18.4075L10.0001 15.8768L5.18697 18.4068C4.97697 18.5181 4.72135 18.5 4.52885 18.3593C4.33635 18.2193 4.2401 17.9825 4.2801 17.7481L5.19947 12.3881L1.30572 8.59371C1.13572 8.42746 1.07385 8.17871 1.1476 7.95309C1.22135 7.72746 1.41697 7.56184 1.6526 7.52746L7.03322 6.74621L9.43947 1.86996C9.6501 1.44309 10.3501 1.44309 10.5607 1.86996L12.967 6.74621L18.3476 7.52746C18.5832 7.56184 18.7788 7.72684 18.8526 7.95309C18.9263 8.17934 18.8645 8.42684 18.6945 8.59371Z"
                    fill="#267EEC"
                  />
                </svg>
              </div>
              <div className="question__feedback-wrap-content-text">
                <p>{`We need access to residential IPs that can be flexibly targeted in order to be able to reliably analyze price accuracy, as some advertisers adjust their price display based on the user's location. Very satisfied with the results. We have replaced the old proxy-based infrastructure with API links provided by 9Proxy.`}</p>
              </div>
              <div className="question__feedback-wrap-content-author">{`Bradley O'Ryan`}</div>
              <div className="question__feedback-wrap-content-arrowright">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1.5131 9.75153H14.6879L12.2196 12.2198C11.5107 12.9288 12.5741 13.9922 13.2831 13.2832L15.5311 11.0318L17.0317 9.52886C17.3225 9.23629 17.3225 8.76379 17.0317 8.47123L13.2831 4.71832C13.1405 4.57177 12.9442 4.48954 12.7397 4.49124C12.0645 4.49132 11.7332 5.31366 12.2196 5.78183L14.6938 8.25012H1.47428C0.434491 8.30171 0.512128 9.80329 1.5131 9.75153Z"
                    fill="#112446"
                  />
                </svg>
              </div>
            </div>
            <div className="question__feedback-wrap-under1"></div>
            <div className="question__feedback-wrap-under2"></div>
          </div>
        </div>
        <div className="question__faq">
          <h1 className="question__faq-head">Solve your usage problems</h1>
          <div className="question__faq-content">
            <div className="question__faq-content-left">
            <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>Can you prepare a custom proxy package for me?</span>
                  <svg
                    onClick={() => handleCheckFAQs(1)}
                    className={checkFAQs.one ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.one ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.one ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>

              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>Can you prepare a custom proxy package for me?</span>
                  <svg
                    onClick={() => handleCheckFAQs(2)}
                    className={checkFAQs.two ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.two ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.two ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>
              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>How long can I use the proxy?</span>
                  <svg
                    onClick={() => handleCheckFAQs(3)}
                    className={checkFAQs.three ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.three ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.three ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>
              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>Can I select proxies from a specific location?</span>
                  <svg
                    onClick={() => handleCheckFAQs(4)}
                    className={checkFAQs.four ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.four ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.four ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>
            </div>
            <div className="question__faq-content-right">
              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>Can I integrate proxies with 3rd party software?</span>
                  <svg
                    onClick={() => handleCheckFAQs(5)}
                    className={checkFAQs.five ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.five ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.five ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>

              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>3 Where can I use residential IP addresses?</span>
                  <svg
                    onClick={() => handleCheckFAQs(6)}
                    className={checkFAQs.six ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.six ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.six ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>

              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>Are your proxies anonymous?</span>
                  <svg
                    onClick={() => handleCheckFAQs(7)}
                    className={checkFAQs.seven ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.seven ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.seven ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>

              <div className="question__faq-content-left-item">
                <div className="question__faq-content-left-item-title">
                  <span>4 How To Buy A Plan?</span>
                  <svg
                    onClick={() => handleCheckFAQs(8)}
                    className={checkFAQs.eight ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2890_12182)">
                      <path
                        d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                        fill="#112446"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2890_12182">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => handleCheckFAQs(0)}
                    className={!checkFAQs.eight ? "hide" : "show"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.959968 8.96013H15.04C15.5703 8.96013 16.0001 8.53032 16.0001 7.99989C16.0001 7.4696 15.5705 7.03979 15.04 7.03979H0.959968C0.429805 7.03993 0 7.46973 0 8.00003C0 8.53032 0.429805 8.96013 0.959968 8.96013Z"
                      fill="#112446"
                    />
                  </svg>
                </div>
                <div className={`question__faq-content-left-item-title-child ${!checkFAQs.eight ? "hidden" : "showed"}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    sol iusmod tempor incididunt ut labore et dolore magna et
                    aliqua ut eos enim ad minim veniam quis nostrudexercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
