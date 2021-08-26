import 'bootstrap/dist/css/bootstrap.css';
import './Sidebar.css';

import MainContent from '../../MainContent.jsx';
const Sidebar = () => {
    
       

    return (
        <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
        
            <li><a href="#">Dashboard</a>
            </li>
            <li><a href="#">Bookings</a>
            </li>
            <li><a href="#">Payment</a>
            </li>
            <li><a href="#">Carbon Savings</a>
            </li>
            <li><a href="#">Contact us</a>
            </li>

       
            
            
            <li style={{marginTop: "300px"}}>
                <a href="#">Sign out</a>
            </li>
        </ul>
    </div>
       
    );
}

export default Sidebar;