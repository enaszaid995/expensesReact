import React from 'react'
import './ExpensesFilter.css'
function ExpensesFilter(props) {
    const SelectHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <h3>Filter by year</h3>
            <select value={props.selected} onChange={SelectHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      )
}

export default ExpensesFilter