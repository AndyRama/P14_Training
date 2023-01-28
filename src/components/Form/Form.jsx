import './Form.scss'

function Form() {
  return (
    <form action="" id="add-employee-form">
      <img
        // src=""
        alt="Health Wealth logo brand name"
      />
      <div className="input-wrapper">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" autoComplete="off" id="firstName" />

        <label htmlFor="lastName">LastName</label>
        <input type="text" autoComplete="off" id="LastName" />

        <label htmlFor="datOfBirth">datOfBirth</label>
        {/* change datePickers */}
        <input type="text" autoComplete="off" />

        {/* change datePickers */}
        <label htmlFor="startDate">startDate</label>
        <input type="text" autoComplete="off" id="startDate" />

        <label htmlFor="street">street</label>
        <input type="text" autoComplete="off" id="street" />

        <label htmlFor="city">city</label>
        <input type="text" autoComplete="off" id="city" />

        <label htmlFor="zipCode">zipCode</label>
        <input type="text" autoComplete="off" id="zipCode" />

        {/* change React-select */}
        <label htmlFor="state">state</label>
        <input type="text" autoComplete="off" id="state" />

        {/* change React-select */}
        <label htmlFor="departement">departement</label>
        <input type="text" autoComplete="off" id="departement" />
      </div>
    </form>
  )
}

export default Form
