import React from "react";
import "./footer.scss";
const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <p className="footer__copyright">Bản quyền &copy; 2022 Vntrip.vn</p>
            <div className="footer__social">
               <a
                  href="https://www.facebook.com/vntrip"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <svg
                     width="18"
                     height="18"
                     viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                  >
                     <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"></path>
                  </svg>
                  <span>Facebook</span>
               </a>
               <a
                  href="https://www.instagram.com/vntrip.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <svg
                     width="18"
                     height="18"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                  >
                     <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"></path>
                     <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"></path>
                     <circle cx="18.406" cy="5.595" r="1.439"></circle>
                  </svg>
                  <span>Instagram</span>
               </a>
               <a
                  href="https://www.vntrip.vn/cam-nang/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <svg
                     width="18"
                     height="18"
                     viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                  >
                     <path d="m162.457 434.408c-23.427 23.444-61.433 23.444-84.861 0-23.075-23.059-23.443-60.249-1.088-83.757l126.465-126.465c-39.112-10.458-82.481-.832-113.748 28.904l-56.231 56.231c-44.711 47.015-43.975 121.395 2.176 167.514 46.855 46.887 122.867 46.887 169.722 0l51.846-51.846c31.425-31.404 41.785-75.905 31.086-115.947z"></path>
                     <path d="m476.835 35.17c-46.119-46.151-120.499-46.887-167.514-2.176l-56.231 56.231c-29.735 31.268-39.361 74.637-28.904 113.748l126.465-126.465c23.508-22.355 60.697-21.987 83.757 1.088 23.444 23.428 23.443 61.433 0 84.861l-125.367 125.367c40.042 10.699 84.543.34 115.947-31.086l51.846-51.846c46.888-46.855 46.888-122.867.001-169.722z"></path>
                     <path d="m164.774 347.228c11.714 11.722 30.717 11.722 42.43 0l140.023-140.023c11.722-11.714 11.722-30.717 0-42.43-11.53-11.538-30.125-11.722-41.878-.544l-141.12 141.12c-11.177 11.752-10.993 30.347.545 41.877z"></path>
                  </svg>
                  <span>Blog du lịch</span>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
