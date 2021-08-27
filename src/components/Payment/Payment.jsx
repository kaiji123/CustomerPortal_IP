import "../../style/Cards.css";
import { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [price, setPrice] = useState({
    total: "5.00",
  });

  return (
    <div className="container">
      <div className="card third-column">
        <div className="card-body header">
          <div>
            <h5 className="card-title">Total Amount {price.total} € </h5>{" "}
          </div>
          <div style={{ margin: "1px" }}>
            <div className="payContainer">
              <input
                type="text"
                placeholder="Enter promocode"
                className="inputField"
              />
              <button>Submit</button>
            </div>
            <button className="payContainer book">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
