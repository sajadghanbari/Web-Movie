import React from 'react';

const CheckBox = (props) => {
    return (
        <div className='form-check'>
            <input
                id={props.name}
                className='form-check-input'
                value={props.value}
                name={props.name} 
                type="checkbox" 
                onChange={props.onChange}
                checked={props.checked}
            />
            <label htmlFor={props.name} className='form-check'>
                {props.title}
            </label>
                
        </div>
    );
}

export default CheckBox;
