import { maxPrepTime } from "./maxPrepData";
import { useState } from "react";
import './maxPrep.css'

function MaxPrep({ onSelect }) {
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
    <div className="maxPrepTime">
      <button 
        className={`maxPrepBtn ${selectedTime ? 'selected' : ''}`}
        onClick={() => setOpen(!open)}
      >
        Max Prep Time        
        <img src="vector3.png" alt="dropdown" className="vector3" />
      </button>

      {open && (
        <div className="maxPrepDropdown">
          <ul className="dropdownList">
            {maxPrepTime.map((prep) => (
              <li key={prep.id} className="dropdownItem">
                <input 
                  type="radio" 
                  id={`prep-${prep.id}`}
                  name="prepTime"
                  value={prep.time}
                  checked={selectedTime === parseInt(prep.time)}
                  onChange={() => handleSelect(prep.time)}
                />
                <label htmlFor={`prep-${prep.id}`}>{prep.time}</label>
              </li>
            ))}
          </ul>
          {selectedTime !== null && (
            <button className="clearBtn" onClick={handleClear}>
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default MaxPrep;



