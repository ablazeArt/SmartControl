const HomeDisplay = () => {
  return (
    <div className="container" id="display">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col column-line">
            <div id="home-sensor-display1" className="sensor-display">
              <h1>อุณหภูมิ</h1>
              <p>27.68 °C</p>
            </div>
            <div id="home-sensor-display2" className="sensor-display">
              <h1>ความชื้น</h1>
              <p>39.58 %</p>
            </div>
            <div id="home-sensor-display3" className="sensor-display">
              <h1>ความเข้มแสง</h1>
              <p>1789 Lux</p>
            </div>
            <div id="home-sensor-display4" className="sensor-display">
              <h1>อัลตราโซนิก</h1>
              <p autocapitalize="none">45.31 cm</p>
            </div>
            <div id="home-sensor-display5" className="sensor-display">
              <h1>ระดับน้ำ</h1>
              <p>17.52 m</p>
            </div>
            <div id="home-sensor-display6" className="sensor-display">
              <h1 className="ph-text">ค่า pH</h1>
              <p>6.8 pH</p>
            </div>
          </div>
          <div className="col">
            <div id="home-actuator-display1" className="actuator-display">
              <h1>เซอร์โวมอเตอร์</h1>
              <div className="actuator-display-status">
                <p>สถานะ : online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display2" className="actuator-display">
              <h1>ดีซี มอเตอร์</h1>
              <div className="actuator-display-status">
                <p>สถานะ : online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display3" className="actuator-display">
              <h1>อาร์จีบี แอลอีดี</h1>
              <div className="actuator-display-status">
                <p>สถานะ : offline</p>
                <img src={require("../images/red-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display4" className="actuator-display">
              <h1>โซลินอยด์ วาล์ว</h1>
              <div className="actuator-display-status">
                <p>สถานะ : online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display5" className="actuator-display">
              <h1>บัซเซอร์</h1>
              <div className="actuator-display-status">
                <p>สถานะ : offline</p>
                <img src={require("../images/red-icon.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
