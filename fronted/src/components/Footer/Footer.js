import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className='container'>
        <div className='row'>
          <div className='col text-center py-3'>Copyrights &copy; Ahmed</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
