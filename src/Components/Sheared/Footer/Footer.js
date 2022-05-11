import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="p-10 bg-neutral text-neutral-content max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
        <div className="flex flex-col ">
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div className="flex flex-col ">
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div className="flex flex-col ">
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            Terms of useNew York - 101010 Hudson
          </Link>
        </div>
      </div>

      <div className=" flex justify-center items-center mt-14">
        <p>Copyright © 2022 - All right reserved by Doctor Portal</p>
      </div>
    </footer>
  );
};

export default Footer;
