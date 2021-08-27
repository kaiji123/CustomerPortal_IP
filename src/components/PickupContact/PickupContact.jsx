import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../style/Cards.css";

const PickupContact = () => {
  return (
    <div className="card first-column">
      <div className="card-body">
        <div className="pickup">
          <h5 className="card-title required header">Pick Up Contact Details</h5>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto",
              padding: "10px",
            }}
          >
            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <div style={{ marginTop: "2px" }}>
                  <AiOutlineUser size={35} />
                </div>

                <input
                  type="text"
                  placeholder="Enter Email"
                  className="inputField"
                />
              </div>
            </div>

            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <div style={{ marginTop: "2px" }}>
                  <AiOutlineMail size={35} />
                </div>

                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="inputField"
                />
              </div>

            </div>
            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <PhoneInput
                  inputClass="phoneInput"
                  country="de"
                  regions={"europe"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dropoff">
          <h5 className="card-title required header">Dropoff Contact Details</h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto",
              padding: "10px",
            }}
          >

            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <div style={{ marginTop: "2px" }}>
                  <AiOutlineUser size={35} />
                </div>

                <input
                  type="text"
                  placeholder="Enter Email"
                  className="inputField"
                />
              </div>
            </div>

            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <div style={{ marginTop: "2px" }}>
                  <AiOutlineMail size={35} />
                </div>

                <input
                  type="text"
                  placeholder="Recipient Name"
                  className="inputField"
                />
              </div>
            </div>
            
            <div style={{ margin: "1px" }}>
              <div className="inputContainer">
                <PhoneInput country="de" regions={"europe"} />
              </div>
            </div>
          </div>

          <div>
            <input
              className="form-check-input custom"
              type="checkbox"
              id="custom-checkbox"
              value=""
              id="flexCheckDefault"
              style={{ marginRight: "10px", width: "2rem", height: "2rem" }}
            />
            <label
              className="form-check-label"
              for="flexCheckDefault"
              style={{ fontSize: "1.5rem" }}
            >
              I agree to Terms and Privacy policy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupContact;
