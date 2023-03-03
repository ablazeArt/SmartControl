const HomeDisplay = () => {
  return (
    <div className="container" id="display">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col column-line">
            <div id="home-sensor-display1" className="sensor-display">
              <h1>Temperature</h1>
              <p>27.68 °C</p>
            </div>
            <div id="home-sensor-display2" className="sensor-display">
              <h1>Humidity</h1>
              <p>39.58 %</p>
            </div>
            <div id="home-sensor-display3" className="sensor-display">
              <h1>Ligth Intensity</h1>
              <p>1789 Lux</p>
            </div>
            <div id="home-sensor-display4" className="sensor-display">
              <h1>Ultrasonic</h1>
              <p autocapitalize="none">45.31 cm</p>
            </div>
            <div id="home-sensor-display5" className="sensor-display">
              <h1>Level</h1>
              <p>17.52 m</p>
            </div>
            <div id="home-sensor-display6" className="sensor-display">
              <h1 className="ph-text">pH</h1>
              <p>6.8 pH</p>
            </div>
          </div>
          <div className="col">
            <div id="home-actuator-display1" className="actuator-display">
              <h1>Servo Motor</h1>
              <div className="actuator-display-status">
                <p>Status : Online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display2" className="actuator-display">
              <h1>DC Motor</h1>
              <div className="actuator-display-status">
                <p>Staus : Online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display3" className="actuator-display">
              <h1>RGB LED</h1>
              <div className="actuator-display-status">
                <p>Status : Offline</p>
                <img src={require("../images/red-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display4" className="actuator-display">
              <h1>Solenoid Valve</h1>
              <div className="actuator-display-status">
                <p>Status : Online</p>
                <img src={require("../images/green-icon.png")} alt="" />
              </div>
            </div>
            <div id="home-actuator-display5" className="actuator-display">
              <h1>Buzzer</h1>
              <div className="actuator-display-status">
                <p>Status : Offline</p>
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
