import { servingData } from "./servings-data";
import { useState } from "react";
import './servings.css'

function Servings({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selectedServing, setSelectedServing] = useState(null);

  const handleSelect = (serving) => {
    const servingValue = parseInt(serving);
    setSelectedServing(servingValue);
    onSelect(servingValue);
    setOpen(false);
  };

  const handleClear = () => {
    setSelectedServing(null);
    onSelect(null);
  };






  

  return (
    <div className="servingNumber">
      <button 
        className={`servingBtn ${selectedServing ? 'selected' : ''}`}
        onClick={() => setOpen(!open)}
      >
        Serving

        <img src="vector3.png" alt="dropdown" className="vector3" />
      </button>

      {open && (
        <div className="serviceDropdown">
          <ul className="dropdownList">
            {servingData.map((service) => (
              <li key={service.id} className="dropdownItem">
             <input 
  type="radio" 
  id={`service-${service.id}`}
  name="servings"
  value={parseInt(service.serving)}
  checked={selectedServing === parseInt(service.serving)}
  onChange={() => handleSelect(service.serving)}
/>

                <label htmlFor={`service-${service.id}`}>{service.serving}</label>
              </li>
            ))}
          </ul>
          {selectedServing !== null && (
            <button className="clearBtn" onClick={handleClear}>
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Servings;
