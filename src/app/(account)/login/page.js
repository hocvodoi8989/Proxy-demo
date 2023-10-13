import Link from "next/link";
import Image from "next/image";

function Login() {
  return (
    <div className="login">
      <div className="login__wrap">
        <div className="login__wrap-head">
          <div className="login__wrap-head-logo">
            <Image
              src="/assets/images/logo-login.webp"
              alt="logo"
              width={118}
              height={35}
              quality={100}
            ></Image>
          </div>

          <div className="login__wrap-head-text">
            <h1>Welcome Back</h1>
            <p>Start protecting yourself with 9Proxy</p>
          </div>
        </div>
        <div className="login__wrap-body">
          <div className="login__wrap-body-tab">
            <div>Login</div>
            <div>Signup</div>
          </div>
          <div className="login__wrap-body-form">
            <div className="login__wrap-body-wrap-form">
              <div className="login__wrap-body-form-wrap-name">
                <div className="login__wrap-body-form-wrap-name-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M18.75 6.0375C18.7272 5.22396 18.388 4.4514 17.8044 3.88414C17.2208 3.31688 16.4389 2.99968 15.625 3H4.37502C3.56115 2.99968 2.77928 3.31688 2.19568 3.88414C1.61208 4.4514 1.2728 5.22396 1.25002 6.0375C1.24666 6.06657 1.24666 6.09593 1.25002 6.125V14.875C1.25002 15.7038 1.57926 16.4987 2.16531 17.0847C2.75136 17.6708 3.54621 18 4.37502 18H15.625C16.4538 18 17.2487 17.6708 17.8347 17.0847C18.4208 16.4987 18.75 15.7038 18.75 14.875V6.125C18.7534 6.09593 18.7534 6.06657 18.75 6.0375ZM4.37502 4.25H15.625C16.0726 4.24375 16.5077 4.39783 16.8516 4.6844C17.1954 4.97097 17.4255 5.37112 17.5 5.8125L11.0375 10.1C10.7301 10.3042 10.3691 10.4132 10 10.4132C9.63089 10.4132 9.26998 10.3042 8.96252 10.1L2.53127 5.8125C2.60497 5.37645 2.83043 4.98048 3.16781 4.69456C3.5052 4.40865 3.93278 4.25119 4.37502 4.25ZM17.5 14.875C17.5 15.3723 17.3025 15.8492 16.9508 16.2008C16.5992 16.5525 16.1223 16.75 15.625 16.75H4.37502C3.87774 16.75 3.40082 16.5525 3.04919 16.2008C2.69756 15.8492 2.50002 15.3723 2.50002 14.875V7.2875L8.26877 11.125C8.78164 11.4663 9.38396 11.6484 10 11.6484C10.6161 11.6484 11.2184 11.4663 11.7313 11.125L17.5 7.2875V14.875Z"
                      fill="#267EEC"
                    />
                  </svg>
                </div>
                <input placeholder="Please enter an email address" />
              </div>
              <div className="login__wrap-body-form-wrap-password">
                <div className="login__wrap-body-form-wrap-password-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                  >
                    <path
                      d="M15.8125 8.75V6.48812C15.8107 5.26521 15.3241 4.0929 14.4593 3.22816C13.5946 2.36343 12.4223 1.87682 11.1994 1.875H10.8006C9.57771 1.87682 8.4054 2.36343 7.54066 3.22816C6.67593 4.0929 6.18932 5.26521 6.1875 6.48812V8.75C5.64049 8.75 5.11589 8.9673 4.72909 9.35409C4.3423 9.74089 4.125 10.2655 4.125 10.8125V17.2062C4.12682 18.245 4.54027 19.2407 5.27478 19.9752C6.0093 20.7097 7.00499 21.1232 8.04375 21.125H13.9562C14.995 21.1232 15.9907 20.7097 16.7252 19.9752C17.4597 19.2407 17.8732 18.245 17.875 17.2062V10.8125C17.875 10.2655 17.6577 9.74089 17.2709 9.35409C16.8841 8.9673 16.3595 8.75 15.8125 8.75ZM7.5625 6.48812C7.5625 5.62932 7.90366 4.80569 8.51092 4.19842C9.11819 3.59116 9.94182 3.25 10.8006 3.25H11.1994C12.0582 3.25 12.8818 3.59116 13.4891 4.19842C14.0963 4.80569 14.4375 5.62932 14.4375 6.48812V8.75H7.5625V6.48812ZM16.5 17.2062C16.5 17.8809 16.232 18.5279 15.755 19.005C15.2779 19.482 14.6309 19.75 13.9562 19.75H8.04375C7.36911 19.75 6.72209 19.482 6.24505 19.005C5.768 18.5279 5.5 17.8809 5.5 17.2062V10.8125C5.5 10.6302 5.57243 10.4553 5.70136 10.3264C5.8303 10.1974 6.00516 10.125 6.1875 10.125H15.8125C15.9948 10.125 16.1697 10.1974 16.2986 10.3264C16.4276 10.4553 16.5 10.6302 16.5 10.8125V17.2062Z"
                      fill="#267EEC"
                    />
                    <path
                      d="M11.6875 14.745V17C11.6875 17.1823 11.6151 17.3572 11.4861 17.4861C11.3572 17.6151 11.1823 17.6875 11 17.6875C10.8177 17.6875 10.6428 17.6151 10.5139 17.4861C10.3849 17.3572 10.3125 17.1823 10.3125 17V14.745C10.0504 14.5936 9.8455 14.36 9.72967 14.0804C9.61383 13.8007 9.59351 13.4907 9.67185 13.1983C9.75019 12.906 9.92282 12.6476 10.163 12.4633C10.4031 12.2791 10.6973 12.1792 11 12.1792C11.3027 12.1792 11.5969 12.2791 11.837 12.4633C12.0772 12.6476 12.2498 12.906 12.3281 13.1983C12.4065 13.4907 12.3862 13.8007 12.2703 14.0804C12.1545 14.36 11.9496 14.5936 11.6875 14.745Z"
                      fill="#267EEC"
                    />
                  </svg>
                </div>
                <input placeholder="Please enter your password" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_520_82799)">
                    <path
                      d="M10 16.75C3.45734 16.75 0.213594 11.0463 0.07875 10.8036C-0.02625 10.6147 -0.02625 10.3852 0.07875 10.1962C0.213594 9.95375 3.45734 4.25 10 4.25C16.5427 4.25 19.7864 9.95375 19.9212 10.1964C20.0263 10.3853 20.0263 10.6148 19.9212 10.8038C19.7864 11.0462 16.5427 16.75 10 16.75ZM1.36047 10.4991C2.10391 11.6258 5.02281 15.5 10 15.5C14.993 15.5 17.8989 11.6289 18.6395 10.5009C17.8961 9.37422 14.9772 5.5 10 5.5C5.00703 5.5 2.10109 9.37109 1.36047 10.4991ZM10 14.25C7.93219 14.25 6.25 12.5678 6.25 10.5C6.25 8.43219 7.93219 6.75 10 6.75C12.0678 6.75 13.75 8.43219 13.75 10.5C13.75 12.5678 12.0678 14.25 10 14.25ZM10 8C8.62156 8 7.5 9.12156 7.5 10.5C7.5 11.8784 8.62156 13 10 13C11.3784 13 12.5 11.8784 12.5 10.5C12.5 9.12156 11.3784 8 10 8Z"
                      fill="#112446"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_520_82799">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Forgot your password?</span>
            </div>

            <button>Login</button>
          </div>

          <div className="login__wrap-body-or">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>

          <div className="login__wrap-body-google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <g clipPath="url(#clip0_520_82809)">
                <path
                  d="M5.81891 15.0035L4.9835 18.1222L1.93011 18.1868C1.01759 16.4943 0.5 14.5578 0.5 12.5C0.5 10.5101 0.983938 8.63362 1.84175 6.98132H1.84241L4.56078 7.4797L5.75159 10.1818C5.50236 10.9084 5.36652 11.6884 5.36652 12.5C5.36661 13.3809 5.52617 14.2249 5.81891 15.0035Z"
                  fill="#FBBB00"
                />
                <path
                  d="M24.2903 10.2583C24.4281 10.9842 24.5 11.7339 24.5 12.5001C24.5 13.3592 24.4097 14.1972 24.2376 15.0056C23.6534 17.7563 22.127 20.1583 20.0125 21.8581L20.0119 21.8574L16.5879 21.6827L16.1034 18.6576C17.5064 17.8348 18.6029 16.5471 19.1805 15.0056H12.7638V10.2583H19.2741H24.2903Z"
                  fill="#518EF8"
                />
                <path
                  d="M20.0119 21.8574L20.0125 21.858C17.9561 23.511 15.3437 24.5 12.5 24.5C7.93012 24.5 3.95694 21.9457 1.93011 18.1868L5.81891 15.0035C6.8323 17.7081 9.44132 19.6334 12.5 19.6334C13.8147 19.6334 15.0464 19.278 16.1033 18.6576L20.0119 21.8574Z"
                  fill="#28B446"
                />
                <path
                  d="M20.1595 3.26263L16.2721 6.44525C15.1782 5.76153 13.8852 5.36656 12.5 5.36656C9.37207 5.36656 6.71425 7.38017 5.75163 10.1818L1.84239 6.98131H1.84174C3.83889 3.13077 7.86217 0.5 12.5 0.5C15.4116 0.5 18.0813 1.53716 20.1595 3.26263Z"
                  fill="#F14336"
                />
              </g>
              <defs>
                <clipPath id="clip0_520_82809">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Google</span>
          </div>

          <div className="login__wrap-body-last">
            Don′t have an account ?<Link href="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
