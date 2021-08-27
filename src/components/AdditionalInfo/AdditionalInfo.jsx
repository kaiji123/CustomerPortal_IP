import ToggleButton from "../ToggleButton/ToggleButton";
import "../../style/Cards.css";

const AdditionalInfo = () => {
  return (
    <div>
      <div className="card second-column">
        <div className="card-body header">
          <div>
            <h5 className="card-title">
              Additional Information <ToggleButton />
            </h5>{" "}
          </div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
