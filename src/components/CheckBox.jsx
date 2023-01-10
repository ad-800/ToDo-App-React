import React from "react";
// onChange={() => handleChange()}
// const handleChange = () => {
//   setCheck(check => !check);
//   console.log(check);
// }

export default function CheckBox() {
  return (
    <input className="form-check-input checkmark" type="checkbox" value="" aria-label="Checkbox for following text input"/>
  );
}
