import './Form.scss'
import IconAddForm from '../Icons/IconAddForm'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function Form() {
  const initialeState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    zipCode: '',
    departement: '',
  }

  const [employee, setEmployee] = useState(initialeState)

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      startDate: employee.startDate,
      street: employee.street,
      city: employee.city,
      zipCode: employee.zipCode,
      departement: employee.departement,
    }
    console.log({ ...newEmployee })
    console.log(newEmployee.id)
    localStorage.setItem('newEmployee', JSON.stringify(newEmployee))
  }

  const {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    state,
    zipCode,
    departement,
  } = employee

  const btn =
    firstName === '' ||
    lastName === '' ||
    dateOfBirth === '' ||
    startDate === '' ||
    street === '' ||
    city === '' ||
    state === '' ||
    zipCode === '' ||
    departement === '' ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
      </button>
    )
  return (
    <form action="" onSubmit={handleSubmit} className="form-newEmployee">
      <IconAddForm />
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
      {/* 
      <button type="submit" className="submit form-newEmployee--submit">
        Save
      </button> */}
      {btn}
    </form>
  )
}

export default Form
