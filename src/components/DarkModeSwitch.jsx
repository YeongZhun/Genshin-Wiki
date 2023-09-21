import React from 'react'
import Switch from '../Switch.css'

const DarkModeSwitch = ({ isOn, handleToggle }) => {
    return (
        <>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label
            style={{ background: isOn && '#fb923c' }}
            className="react-switch-label mt-2"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </>
      );
    };

export default DarkModeSwitch