import { Component } from "react";
import "./VehicleChoice.css";
import "../../style/Cards.css";
class VehicleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = { isMediumOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClickSmall = this.handleClickSmall.bind(this);
    this.handleClickMedium = this.handleClickMedium.bind(this);
  }

  handleClickSmall() {
    this.setState((prevState) => ({
      isMediumOn: false,
    }));
    console.log("hello");
  }
  handleClickMedium() {
    this.setState((prevState) => ({
      isMediumOn: true,
    }));
  }
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div className="card second-column vehicle">
        <div className="card-body">
          <h5 className="card-title">Choose your vehicle</h5>
        </div>
        <div
          onClick={this.handleClickSmall}
          className={this.state.isMediumOn ? "notselected" : "selected"}
        >
          <img className="notselected image" src="./Small.png" alt="" />
        </div>
        <div
          onClick={this.handleClickMedium}
          className={this.state.isMediumOn ? "selected" : "notselected"}
        >
          <img className="notselected image" src="./Medium.png" alt="" />
        </div>
      </div>
    );
  }
}

export default VehicleChoice;
