import ToggleButton from "../../ToggleButton";
import '../../style/Cards.css'
import PickupContact from "../../PickupContact";
const AdditionalInfo = () => {
    
       

    return (
        <div>
                 <div className="card SecondColumn" >
        <div className="card-body header" >
        <div><h5 className="card-title">Additional Information <ToggleButton/></h5>   </div>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        
            
            
          </div>
          
          </div>
         
        </div>
   

    );
}

export default AdditionalInfo;