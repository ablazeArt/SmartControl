import { useState } from "react";

const HomeCheckbox = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button
        className="d-block btn-display $is"
        id="button-home"
        onClick={displayBoxToggle}
      >
        +
      </button>
      <div className="container" id="select-display">
        <div className={`container text-center display-block ${isShowDisplayBox ? '' : 'hidden'}`}>
          <div className="row align-items-start">
            <div className="col column-line">
              <h1 className="head-block">เซนเซอร์</h1>
              <div className="display-checkbox">
                <p>อุณหภูมิ</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox1"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>ความชื้น</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox2"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>ความเข้มแสง</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox3"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>อัลตราโซนิก</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox4"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>ระดับน้ำ</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox5"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p className="ph-text">ค่า pH</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox6"
                  className="checkbox"
                />
              </div>
            </div>
            <div className="col">
              <h1 className="head-block">แอคชูเอเตอร์</h1>
              <div className="display-checkbox">
                <p>เซอร์โวมอเตอร์</p>
                <input
                  id="home-actuator-checkbox1"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>ดีซี มอเตอร์</p>
                <input
                  id="home-actuator-checkbox2"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>อาร์จีบี แอลอีดี</p>
                <input
                  id="home-actuator-checkbox3"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>โซลินอยด์ วาล์ว</p>
                <input
                  id="home-actuator-checkbox4"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>บัซเซอร์</p>
                <input
                  id="home-actuator-checkbox5"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCheckbox;
