import React, { useState } from 'react';
import DownArrow from './DownArrow';
import classes from './Dropdown.module.css';

function Dropdown(props) {
  const [showDropdwon, setShowDropdown] = useState(false);

  const focusDropdownHandler = () => {
    setShowDropdown(true);
  };

  const blurDropdownHandler = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div
      className={classes.dropdown}
      onFocus={focusDropdownHandler}
      onBlur={blurDropdownHandler}
    >
      <button
        className={classes.dropdownButton}
        style={{ color: showDropdwon ? '#66fcf1' : '' }}
      >
        {props.label}
        <span
          className={classes.badge}
          style={{ backgroundColor: showDropdwon ? '#ccc' : '' }}
        >
          {props.badge}
        </span>
        <span>
          <DownArrow fill={showDropdwon ? '#66fcf1' : '#aaabac'} />
        </span>
      </button>
      {showDropdwon && (
        <div className={classes.container}>{props.children}</div>
      )}
    </div>
  );
}

export default Dropdown;
