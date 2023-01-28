import './Form.scss'
import IconAddForm from '../Icons/IconAddForm'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import employeeList from '../../data/mockData.json'

function Form() {
  const initialeState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    zipCode: '',
    stateAbbrev: '',
    startDate: '',
    departement: '',
  }

  const [newEmployee, setNewEmployee] = useState(initialeState)

  // const redirectTo = useNavigate()
  // function goTo() {
  //   redirectTo('employees')
  // }

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() })
  }

  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || employeeList

  const handleSubmit = (e) => {
    e.preventDefault()
    employeesList.push(newEmployee)

    // update data
    employeesList.push(newEmployee)

    console.log(newEmployee)
    console.log(employeesList)

    // complete / correct data
    newEmployee.id = employeesList.length

    // store data
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList))

    return (
      <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
        <IconAddForm id="addUser" alt="Health Wealth add user" />
        <div className="input-wrapper">
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            autoComplete="off"
            id="firstName"
            onChange={handleChange}
          />

          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            autoComplete="off"
            id="LastName"
            onChange={handleChange}
          />

          <label htmlFor="datOfBirth">datOfBirth</label>
          {/* change datePickers */}
          <input type="text" autoComplete="off" onChange={handleChange} />

          {/* change datePickers */}
          <label htmlFor="startDate">startDate</label>
          <input
            type="text"
            autoComplete="off"
            id="startDate"
            onChange={handleChange}
          />

          <label htmlFor="street">street</label>
          <input
            type="text"
            autoComplete="off"
            id="street"
            onChange={handleChange}
          />

          <label htmlFor="city">city</label>
          <input
            type="text"
            autoComplete="off"
            id="city"
            onChange={handleChange}
          />

          <label htmlFor="zipCode">zipCode</label>
          <input
            type="text"
            autoComplete="off"
            id="zipCode"
            onChange={handleChange}
          />

          {/* change React-select */}
          <label htmlFor="state">state</label>
          <input
            type="text"
            autoComplete="off"
            id="state"
            onChange={handleChange}
          />

          {/* change React-select */}
          <label htmlFor="departement">departement</label>
          <input
            type="text"
            autoComplete="off"
            id="departement"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit form-newEmployee--submit">
          Save
        </button>
      </form>
    )
  }
}
export default Form
