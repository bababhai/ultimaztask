import React from 'react'

function SelectOption(props) {
  const {type, placeholder, name, onChangeFormInput ,value} = props; 
//  const [state , setInputState] = useState({[name]:''});

   const onChangeInput = (event) => {
     console.log('event', event);
     onChangeFormInput(event);
   }
 
  return (
    <div className="input_txt">
    <select onChange={onChangeInput} name={name}>
      <option>Select Country*</option>
      <option  value="101">India</option>
      <option value="102">UAE</option>
      <option value="103">Canada</option>
    </select>
  </div>
  )
}

export default SelectOption