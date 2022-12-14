import React, { useState } from 'react'

function InputText(props) {
  const {type, placeholder, name, onChangeFormInput ,value} = props; 
  //const [state , setInputState] = useState({[name]:''});

  const onChangeInput = (event) => {
    //console.log('event', event);

    onChangeFormInput(event);
  }

  return (
  <div className="input_txt">
    <input type={type} autoComplete="off" placeholder={placeholder} value={value} onChange={onChangeInput} name={name} />
  </div>

  )
}

export default InputText