import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "./NavbarComponent";
import { Link, useParams } from "react-router-dom";
import HomeTop from "./home/HomeTop";
import { HashLink } from "react-router-hash-link";

const EditComponent = () => {
  const [state, setState] = useState({
    value: "",
    speed: "",
    degree: "",
  });

  const { actuatorName, value, speed, degree } = state;
  const { commandId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/command/${commandId}`)
      .then((response) => {
        //แยกข้อมูล
        const { value, speed, degree } = response.data;
        //เก็บข้อมูลเดิม
        setState({ ...state, value, speed, degree });
      })
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
      <div>
        <div className="container" id="edit-temp-servo-display">
          <div className="head-edit">
            <h1>Edit Command</h1>
          </div>
          <div className="container text-center display-block main-block" style={{paddingTop: '23px'}}>
            <form onSubmit={submitForm}>
              <div className="row align-items-start">
                <div className="col column-line command-actuator">
                  <h1 head-block>Servo Motor</h1>
                </div>
                <div className="col column-line command-actuator">
                  <h1 className="edit-value">The Desired Temperature</h1>
                  <h1>
                    <select onChange={inputValue("speed")}>
                      <option value="">Previous Speed:{speed}</option>
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
                      <option value="">Previous Degree:{degree}</option>
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
                  <input
                    type="number"
                    className="form-value"
                    placeholder="ระบุอุณหภูมิ"
                    value={value}
                    onChange={inputValue("value")}
                  />
                  <button type="submit" className="form-submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button className="return-btn"><HashLink smooth to={"/#list-manual"}>Back to command page</HashLink></button>
        </div>
      </div>
    );
  };
  //   //กำหนดค่าให้state
  const inputValue = (name) => (event) => {
    // console.log(event.target.value)
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API}/command/${commandId}`, {
        actuatorName,
        value,
        speed,
        degree,
      })
      .then((response) => {
        Swal.fire("ยินดีด้วย", "อัพเดทคำสั่งสำเร็จ!", "success");
        //อัพเดทข้อมูลใหม่
        const { value, speed, degree } = response.data;
        setState({ ...state, value, speed, degree });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
  };

  return (
    <div className="edit-component">
      <NavbarComponent />
      {/* <h1>{JSON.stringify(state.commandId)}</h1> */}
      {showUpdateForm()}
    </div>
  );
};

export default EditComponent;
