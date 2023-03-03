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
              <h1 className="head-block">Sensor</h1>
              <div className="display-checkbox">
                <p>Temperature</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox1"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Humidity</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox2"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Light Intensity</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox3"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Ultrasonic</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox4"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Level</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox5"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p className="ph-text">pH</p>
                <input
                  type="checkbox"
                  id="home-sensor-checkbox6"
                  className="checkbox"
                />
              </div>
            </div>
            <div className="col">
              <h1 className="head-block">Actuator</h1>
              <div className="display-checkbox">
                <p>Servo Motor</p>
                <input
                  id="home-actuator-checkbox1"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>DC Motor</p>
                <input
                  id="home-actuator-checkbox2"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>RGB LED</p>
                <input
                  id="home-actuator-checkbox3"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Solinoid Valve</p>
                <input
                  id="home-actuator-checkbox4"
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="display-checkbox">
                <p>Buzzer</p>
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
