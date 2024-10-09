
function App() {
function calculateResults(e){
    console.log('Calculating')
        const amount =document.getElementById('amount');
        const interest =document.getElementById('interest');
        const years =document.getElementById('years');
        const monthlyPayment =document.getElementById('monthly-payment');
const totalPayment=document.getElementById('total-payment');
const totalInterest=document.getElementById('total-interest');
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/100/12;

const calculatedPayment =parseFloat(years.value)*12;

const x =Math(1+ calculatedInterest, calculatedPayment);
const monthly =(principal* x * calculatedInterest)/(x-1);
    e.preventDefault();
}
  return (
    
    <div>
    <h1 className=''>Pesonal Loan Calculator</h1>
    <div className="container-fluid d-flex w-100 border borderd">
      <div className="row-12 w-100 d-block text-start d-md-flex">
          <div className="col py-5  bg-danger">
           <form action="" id ="loan-form">  <b>Loan Details</b><br></br>
             
             <label > Loan Amount</label>  <input type="number" placeholder="Amount" id="amount" />
         <label > Intrerest</label> <input type="number" id="interest" placeholder='Interest' />
             <label > Loan Term</label> <input type="number" id="years" placeholder='Years to repay' />
<input type="submit" className="btn btn-dark btn-block" value="Calculate" />

 <p> <input type="number" placeholder="Amount" id="monthly-payment" disabled /></p>
             <p><input placeholder="total-amount" type="number" id='total-amount' disabled/></p>
         <p><input placeholder="total-interest" type="number" id='total-interest' disabled /></p>

</form> 
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
  </div>  );
}

export default App;
