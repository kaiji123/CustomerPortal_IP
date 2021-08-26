import 'bootstrap/dist/css/bootstrap.css';
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useWindowSize from './utils/useWindowSize';
import './style/Cards.css'


const PickupContact = () => {
    
  
   

    return (
     
            <div class="card FirstColumn" >
        <div class="card-body">
            <div class="pickup">
            <h5 class="card-title required header">Pick Up Contact Details</h5>
          <div style = {{display: "grid",gridTemplateColumns: "auto", padding: "10px" }}>
            <div style = {{   margin: "1px"}}>
            
                <div class = "inputContainer">
                    
                    <div style={{marginTop:"2px"}}><AiOutlineUser size={35}/></div>
                
                    <input type="text" placeholder="Enter Email" class ="inputField"  />
                </div>
                
            </div>
            <div style = {{   margin: "1px"}}>
                
                <div class = "inputContainer">
                    <div style={{marginTop:"2px"}}><AiOutlineMail size={35}/></div>
                
                    <input type="text" placeholder="Receiver Name" class ="inputField"  />
                </div>
            </div>
            <div style = {{   margin: "1px"}}>
                <div class = "inputContainer">
                <PhoneInput
                    
                    inputClass="phoneInput"
                    country='de'
                    regions={'europe'}
                    />
                </div>
            </div>
          </div>
          
            </div>

        <div class="dropoff">
        <h5 class="card-title required header">Dropoff Contact Details</h5>
          <div style = {{display: "grid",gridTemplateColumns: "auto", padding: "10px"  }}>
            <div style = {{   margin: "1px"}}>
            
            <div class = "inputContainer">
                   <div style={{marginTop:"2px"}}><AiOutlineUser size={35}/></div>
                
                    <input type="text" placeholder="Enter Email" class ="inputField"  />
                </div>
                
            </div>
            <div style = {{   margin: "1px"}}>
                
            <div class = "inputContainer">
                <div style={{marginTop:"2px"}}><AiOutlineMail size={35}/></div>
                
                    <input type="text" placeholder ="Recipient Name" class ="inputField" />
                </div>
            </div>
            <div style = {{   margin: "1px"}}>
            <div class = "inputContainer">
                <PhoneInput
                    
                        country='de'
                        regions={'europe'}
                />
            </div>
            </div>
          </div>
          
                <div>
                    <input class="form-check-input custom" type="checkbox" id="custom-checkbox" value="" id="flexCheckDefault" style={{ marginRight: "10px", width: "2rem", height: "2rem" }} />
                    <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: "1.5rem" }}>
                        I agree to Terms and Privacy policy
                    </label>
                </div>
        </div>
         
               
            
        </div>
      </div>
         
       
        
       
    );
}

export default PickupContact;