import React,{ useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories,categories }) => {

    const [inputValue, setInputValue] = useState('');

    const handInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){

            setCategories([inputValue,...categories]);
            setInputValue('');
            //tambien se puede llamar asi haciendo un callback de la funcion setCategories
            //setcategories( cats => [...cats, inputValue]);
        }
        console.log('Submit hecho');


    }


    return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handInputChange}
                />
            </form>
    )
}

AddCategory.propTypes = {
    
    setCategories: PropTypes.func.isRequired
}