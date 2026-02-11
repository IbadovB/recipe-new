import { maxCookTime } from "./maxCookData";
import { useState } from "react";
import './maxCook.css'

function MaxCook({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelect = (time) => {
    const timeValue = parseInt(time);
    setSelectedTime(timeValue);
    onSelect(timeValue);
    setOpen(false);
  };

  const handleClear = () => {
    setSelectedTime(null);
    onSelect(null);
  };

  return (
    <div className="maxCookTime">
      <button 
        className={`maxCookBtn ${selectedTime ? 'selected' : ''}`}
        onClick={() => setOpen(!open)}
      >
        Max Cook Time

        <img src="vector3.png" alt="dropdown" className="vector3" />
      </button>

      {open && (
        <div className="maxCookDropdown">
          <ul className="dropdownList">
            {maxCookTime.map((cook) => (
              <li key={cook.id} className="dropdownItem">
                <input 
                  type="radio" 
                  id={`cook-${cook.id}`}
                  name="cookTime"
                  value={cook.time}
                  checked={selectedTime === parseInt(cook.time)}
                  onChange={() => handleSelect(cook.time)}
                />
                <label htmlFor={`cook-${cook.id}`}>{cook.time}</label>
              </li>
            ))}
          </ul>
          {selectedTime && (
            <button className="clearBtn" onClick={handleClear}>
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default MaxCook;
