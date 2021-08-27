import "bootstrap/dist/css/bootstrap.css";
import "./JourneyDetails.css";
import "../../style/Cards.css";

const JourneyDetails = () => {
  return (
    <div className="card first-column">
      <div className="card-body">
        <h5 className="card-title required">Journey Details</h5>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            padding: "10px",
          }}
        >
          <div className="header">
            <h5 className="card-subtitle mb-2 text-muted">Pick up</h5>
            <div
              className="inputContainer1"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                padding: "10px",
              }}
            >
              <img src="./Location1.png" alt="" className="inputIcon" />
              <input
                type="text"
                className="inputField"
                placeholder="Enter location"
              />
            </div>
          </div>
          <div className="header">
            <h5 className="card-subtitle mb-2 text-muted">Drop off</h5>
            <div
              className="inputContainer1"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                padding: "10px",
              }}
            >
              <img src="./Location.png" alt="" className="inputIcon" />

              <input
                type="text"
                className="inputField"
                placeholder="Enter location"
              />
            </div>
          </div>
          <div className="header">
            <h5 className="card-subtitle mb-2 text-muted">Date of journey</h5>
            <div
              className="inputContainer1"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                padding: "10px",
              }}
            >
              <img src="./Calendar.png" alt="" className="inputIcon" />

              <input type="text" className="inputField" placeholder="Enter date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetails;
