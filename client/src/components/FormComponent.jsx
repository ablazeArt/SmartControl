import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormComponent = () => {
  const [state, setState] = useState({
    value: "",
    speed: "",
    degree: "",
  });
  const { actuatorName, value, speed, degree, commandId } = state;
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/create`, { actuatorName, value, speed, degree, commandId })
      .then((response) => {
        Swal.fire("ยินดีด้วย", "บันทึกคำสั่งสำเร็จ!", "success");
        setState({ ...state, value: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
    setTimeout(function () {
      window.location.reload();
    }, 1300);
  };
  console.log({ ...state, actuatorName });
  //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    console.log(event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  useEffect(() => {
    setState({ ...state, actuatorName: "เซอร์โวมอเตอร์" });
  }, []);

  const addId = () => {
    document.getElementById("commandId").value = crypto.randomUUID();
  };

  return (
    <div>
      <div className="container" id="temp-servo-display">
        <div className="container text-center display-block main-block">
          <h1 className="head-block">Command</h1>
          <form onSubmit={submitForm}>
            <div className="row align-items-start command-form">
              <div className="col column-line command-actuator">
                <h1 head-block>Servo Motor</h1>
              </div>
              <div className="col column-line command-actuator">
                <h1 className="form-command-head-value">Desired Temperature</h1>
                <h1>
                  <select onChange={inputValue("speed")}>
                    <option value="">Rotational Speed</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="75">75</option>
                    <option value="90">90</option>
                  </select>
                </h1>
                <h1>
                  <select onChange={inputValue("degree")}>
                    <option value="">Rotational Degree</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="75">75</option>
                    <option value="90">90</option>
                  </select>
                </h1>
              </div>
              <div className="col column-line command-actuator">
                <input type="number" className="form-value" placeholder="Desired Temperature" value={value} onChange={inputValue("value")} />
                <button id="commandId" type="submit" value="" onMouseMove={addId} onClick={inputValue("commandId")} className="form-submit">
                  บันทึก
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
