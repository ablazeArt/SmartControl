import { useState } from "react";
import TempServo from "./command/TempServo";

const CommandSet = () => {
  const [isShowDisplayBox, setIsShowDisplayBox] = useState(false);
  const displayBoxToggle = () => {
    setIsShowDisplayBox((current) => !current);
  };
  return (
    <div>
      <button class="d-block btn-display" id="button-commandlist-temp" onClick={displayBoxToggle}>
        {isShowDisplayBox ? "Show Commands List" : "Hide Commands List"}
      </button>

      <div className="container" id="list-manual">
        <div className={`container text-center display-block main-block ${isShowDisplayBox ? "is-hidden" : "is-show"}`}>
          <div className="row align-items-start">
            <div className="col-12 column-line">
              <h1 className="head-block">Command List</h1>
            </div>
            <TempServo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandSet;
