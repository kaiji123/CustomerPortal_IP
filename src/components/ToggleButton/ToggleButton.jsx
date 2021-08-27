import "./ToggleButton.css";
const ToggleButton= () =>{
    return(
        <div>
            If any item is above 30 kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleButton