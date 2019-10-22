import React from 'react';

import './search-box.styles.css';

//functional components don't have access to state or lifescycle methods, functional components just get some props and return something
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={ placeholder }
        onChange={ handleChange } 
    />
)