import React  from 'react'
const LoanCalculator = () => {
  return (
    <div>
      <h1 className=''>Pesonal Loan Calculator</h1>
      <div className="container-fluid d-flex w-100 border borderd">
        <div className="row-12 w-100 d-block text-start d-md-flex">
            <div className="col py-5  bg-danger">
                <b>Loan Details</b><br></br>
               
               <label > Loan Amount</label> <p> <input type="text" placeholder='h' /></p>
               <label > Intrerest</label>  <p><input type="text" placeholder='h' /></p>
               <label > Loan Term</label>  <p><input type="text" placeholder='h' /></p>

            </div>
            <div className="col-8 bg-primary">
            <b>Your loan estimate</b><br></br>
<div className="row bg-white w-100 ms-2">
    <div className="col"><h1>Monthly Payment</h1></div>
    <div className="col">
<table className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table></div>
</div>
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default LoanCalculator;
