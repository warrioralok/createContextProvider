import React from 'react';
 
const Input = React.forwardRef(function Input({ label, ...props }, ref) {
  //console.log(ref)  
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...props} />
    </p>
  );
});
 
export default Input;