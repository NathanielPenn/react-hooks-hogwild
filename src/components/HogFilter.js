import React from 'react';

function HogFilter({setIsGreased, setIsSorted}){

    return(
        <div>
            <label>Filter the Greasy</label>
            <input onChange = {(e) => setIsGreased(e.target.checked)} type = "checkbox"></input>
            <select onChange= {(e) => setIsSorted(e.target.value)}>
                <option>All</option>
                <option>Weight</option>
                <option>Name</option>
            </select>
        </div>)
}

export default HogFilter;