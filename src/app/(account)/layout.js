"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AccountLayout({ children }) {

  const [tabActive, setTabActive] = useState(false);

  const handleActiveLogin = () => {
    setTabActive(false);
  };

  const handleActiveSignup = () => {
    setTabActive(true);
  };

  return (
    <div className="account">
      <div className="account__welcome">
        <div className="account__welcome-content">
          <Image
            className="account__welcome-content-img"
            src="/assets/images/robot.webp"
            alt="robot"
            width={651}
            height={584}
            quality={100}
          />
          <div className="account__welcome-content-wrap">
            <div className="account__welcome-content-wrap-text">
              <h1>Welcome Back</h1>
              <p>Start protecting yourself with 9Proxy</p>
            </div>
            <div className="account__welcome-content-wrap-move">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_520_82755)">
                  <path
                    d="M3.61088 7.79628L9.84106 14.0263C9.98515 14.1706 10.1775 14.25 10.3826 14.25C10.5877 14.25 10.7801 14.1706 10.9242 14.0263L11.383 13.5676C11.6815 13.2688 11.6815 12.783 11.383 12.4845L6.15135 7.2529L11.3888 2.01547C11.5329 1.87126 11.6124 1.67901 11.6124 1.47402C11.6124 1.2688 11.5329 1.07656 11.3888 0.932239L10.93 0.473657C10.7858 0.329447 10.5935 0.25 10.3884 0.25C10.1833 0.25 9.99096 0.329447 9.84686 0.473657L3.61088 6.70941C3.46644 6.85408 3.38711 7.04723 3.38757 7.25256C3.38711 7.45869 3.46644 7.65173 3.61088 7.79628Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_520_82755">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="matrix(-1 0 0 -1 14.5 14.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="account__welcome-content-wrap-move-tab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.5" cy="4.25" r="4" fill="white" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.5" cy="4.25" r="4" fill="white" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.5" cy="4.25" r="4" fill="white" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.5" cy="4.25" r="4" fill="white" />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_520_82764)">
                  <path
                    d="M11.3891 6.70372L5.15895 0.473657C5.01485 0.329447 4.82249 0.25 4.61739 0.25C4.41229 0.25 4.21993 0.329447 4.07583 0.473657L3.61702 0.932352C3.31847 1.23124 3.31847 1.71703 3.61702 2.01547L8.84866 7.2471L3.61122 12.4845C3.46712 12.6287 3.38756 12.821 3.38756 13.026C3.38756 13.2312 3.46712 13.4234 3.61122 13.5678L4.07003 14.0263C4.21424 14.1706 4.40648 14.25 4.61158 14.25C4.81669 14.25 5.00904 14.1706 5.15314 14.0263L11.3891 7.79059C11.5336 7.64592 11.6129 7.45277 11.6124 7.24744C11.6129 7.04131 11.5336 6.84827 11.3891 6.70372Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_520_82764">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.5 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="login">
        <div className="login__wrap">
          <div className="login__wrap-head">
            <div className="login__wrap-head-logo">
              <Link href="#">
                <Image
                  src="/assets/images/logo-login.webp"
                  alt="logo"
                  width={118}
                  height={35}
                  quality={100}
                ></Image>
              </Link>
            </div>

            <div className="login__wrap-head-text">
              <h1>Welcome Back</h1>
              <p>Start protecting yourself with 9Proxy</p>
            </div>

            <div className="login__wrap-head-tab">
              <Link
                href="/login"
                onClick={() => handleActiveLogin()}
                style={!tabActive ? { color: "#112446" } : {}}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => handleActiveSignup()}
                style={tabActive ? { color: "#112446" } : {}}
              >
                Signup
              </Link>
              <div
                className="login__wrap-head-tab-bg"
                style={!tabActive ? { left: "1%" } : { left: "49%" }}
              ></div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
