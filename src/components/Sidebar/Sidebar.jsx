import 'bootstrap/dist/css/bootstrap.css';
import './Sidebar.css';

import MainContent from '../../MainContent.jsx';
import {MdDashboard,MdPayment, MdContactPhone} from 'react-icons/md'
import {BsBook} from 'react-icons/bs'
import {RiMoneyPoundCircleFill} from 'react-icons/ri'
import {GoSignOut} from 'react-icons/go'




const Sidebar = () => {
    
       

    return (
        <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
        
            <li><a href="#"><MdDashboard/> Dashboard</a>
            </li>
            <li><a href="#"><BsBook/> Bookings</a>
            </li>
            <li><a href="#"><MdPayment/> Payment</a>
            </li>
            <li><a href="#"><RiMoneyPoundCircleFill/> Carbon Savings</a>
            </li>
            <li><a href="#"><MdContactPhone/> Contact us</a>
            </li>

       
            
            
            <li style={{marginTop: "300px"}}>
                <a href="#"><GoSignOut/>Sign out</a>
            </li>
        </ul>
    </div>
       
    );
}

export default Sidebar;