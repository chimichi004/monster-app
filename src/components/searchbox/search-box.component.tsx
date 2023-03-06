import React from 'react';


export const SearchBox = ({placeholder, handleChange}:any) => {
    return <>
      <input 
      className='search'
      type='search' 
      placeholder={placeholder}
      onChange={handleChange}
    />
    </>
}