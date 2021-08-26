
import {Component} from 'react'
import {RiFootprintFill} from "react-icons/ri"
import {HiOutlineInformationCircle} from "react-icons/hi"
import {GrShare} from 'react-icons/gr'
import "./CarbonFootprint.css"
import '../../style/Cards.css'
class CarbonFootprint extends Component {
    constructor(props) {
      super(props);
      this.state = {score: 57, behavioralPoint:158, carbonEmission:120};
    }
  
    componentDidMount() {
   
    }
  
    componentWillUnmount() {
      
    }
  
  
    render() {
      return (
        <div className="card Card SecondColumn"  >
        <div className="card-body header" >
            <div><h5 className="card-title">Carbon Footprint <RiFootprintFill/></h5>
            <h5 className="card-title">Your overall score is <h3>{this.state.score} kg <small>/100</small></h3> </h5></div>
            <h6>behavioral points: {this.state.behavioralPoint}</h6>
            <h6>Carbon Emission: {this.state.carbonEmission}</h6>
            <a href=""><HiOutlineInformationCircle style={{position:"absolute",right:"3px", top:"10px", width:"20%", height:"15%"}} /></a>
            <h5>Share your score with friends <a href=""><GrShare/></a></h5>
          </div>
    </div>
   
        
      );
    }
  }
  
export default CarbonFootprint;