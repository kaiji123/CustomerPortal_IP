import "./ToggleButton.css";
const ToggleButton= () =>{
    return(
        <div>
            If any item is above 30 kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
        </div>
    );
}

export default ToggleButton