import { useState } from "react";
import { HashLink } from 'react-router-hash-link';

const NavbarComponent = () => {

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const menuToggle = ()=>{
    setIsNavbarActive(current => !current);
  }
  
  return (
    <div>
      <div id="menu-bars" className={`fas ${isNavbarActive ? 'fa-times' : 'fa-bars'}`} onClick={menuToggle}></div>
      <header className={isNavbarActive ? 'active' : ''}>
        <a href="#home" className="logo">
          <span>Smart</span>Tech
        </a>

        <nav className="navbar d-block">
          <div className="image">
            <img src={require("./images/young-man.jpg")} alt="" />
            <p className="username">ชื่อผู้ใช้งาน</p>
          </div>
          <HashLink smooth to={"/#home"} onClick={menuToggle}>
            <span className="material-symbols-outlined">home</span>หน้าแรก
          </HashLink>
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="material-symbols-outlined">sensors</span>เซนเซอร์
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <HashLink
                  className="dropdown-item"
                  href="#tempt-sensor"
                  onClick={menuToggle}
                  smooth to={"/#temp-servo-display"}
                >
                  อุณหภูมิ
                </HashLink>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  ความชื้น
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  ความเข้มแสง
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  อัลตราโซนิก
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  ระดับน้ำ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  ความเป็น กรด-เบส
                </a>
              </li>
            </ul>
          </div>
          <a href="#service" onClick={menuToggle}>
            <span className="material-symbols-outlined">tune</span>แมนนวล
          </a>
          <a href="#experience" onClick={menuToggle}>
            <span className="material-symbols-outlined time">schedule</span>เวลา
          </a>
          <a href="#contact" onClick={menuToggle}>
            <span className="material-symbols-outlined camera">
              photo_camera
            </span>
            กล้อง
          </a>
        </nav>
        <div className="follow">
          <div className="image">
            <img src={require("./images/KMUTT.png")} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
