import TempServo from "./command/TempServo";

const CommandSet = () => {
  return (
    <div>
      <div className="container" id="list-manual">
        <div className="container text-center display-block main-block">
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
