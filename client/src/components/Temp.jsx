const Temp = () => {
  let tempValue = "25";
  return (
    <div>
      <div className="container">
        <div id="tempt-sensor" className="sensor-command display-block main-block">
          <h1 className="head-block">Temperature</h1>
          <div className="container">
            <div className="row g-2">
              <div className="col-6">
                <div className="circlebar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ "--value": `${tempValue}` }}></div>
              </div>
              <div className="col-6">
                <h1 className="value-text">{tempValue} degrees Celsius</h1>
              </div>
              <div className="space-box col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
