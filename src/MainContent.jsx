import 'bootstrap/dist/css/bootstrap.css';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo.jsx';
import CarbonFootprint from './components/CarbonFootprint/CarbonFootprint.jsx';
import JourneyDetail from "./components/JourneyDetails/JourneyDetails.jsx";
import PickupContact from './PickupContact.jsx';
import VehicleChoice from './components/VehicleChoice/VehicleChoice.jsx';
import useWindowSize from './utils/useWindowSize.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ProgressBar from './components/ProgressBar/ProgressBar.jsx';
import Map from './components/Map/Map.jsx';
import Payment from './components/Payment/Payment.jsx';
import "./App.css"
import "./MainContent.css"

const MainContent = () => {
    
    const {width} = useWindowSize();
    console.log(width)
    if(width>1000){
        return (
            <div className="MainContent">
            <Sidebar/>
            
            <div className="d-flex" >
                    <div className="d-flex align-items-stretch">
                        <div>
                        <JourneyDetail/>
                        <PickupContact/>
                        </div>
              
                    </div>
                    <div className="d-flex align-items-stretch">
                        <div>
                       <CarbonFootprint/>
                       <VehicleChoice/>
                       <AdditionalInfo/>
                        </div>
                    </div>
                    <div className="d-flex align-items-stretch">
                        <div>
                            <Map/>
                           
                            <ProgressBar/>
                            <Payment/>
                        </div>
                    </div>
              
                    
            </div>
                  
            </div>
           
        );
    }else{
        return(
            <div></div>
        );
    }
    
}

export default MainContent;