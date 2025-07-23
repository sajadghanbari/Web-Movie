import React from 'react';

const Select = (props) => {
    return (
        <div className='mb-3'>
            <label htmlFor={props.name} className='form-label'>
                {props.title}
            </label>
            <select 
                name={props.name} 
                className='form-select' 
                id={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">{props.placeHolder}</option>
                {props.options.map((option)=>{
                    return (
                        <option 
                            value={option.id}
                            key={option.id}
                        >
                            {option.value}
                        </option>
                    )
                })}
            </select>
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    );
}

export default Select;
