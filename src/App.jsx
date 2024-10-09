import React from 'react';
import Calculator from './component/Calculator';
// import CalculatorHookForm from './components/calculator/CalculatorHookForm';
import './App.css';

import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  // const [pAmount, setpAmount] =useState(24670);
  // const[interest,setInterest]=useState(7);
  // const[duration,setDuration]=useState(147);
  // setpAmount =20;
  // setInterest=30;
  // setDuration=400;
  // const maxValue =60000;
  // const intMax =20;
  // const maxDuration=360;
// const setEmi=  Math.round((emi)*(1-Math.pow((1+intr),(-duration))));

// const totalAmt =duration*emi;
// var TotalAmountOfCredit= Math.round((emi)*(1-Math.pow((1+intr),(-duration))));
// const TotalAmountOfInterest =Math.round(totalAmt-TotalAmountOfCredit);

// const intr= interest/1200;
// const [emi]=setEmi(0)
// {}
  return (
    <>
      <Calculator />

 <Router>
    
      {/* <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/converter' element={<Today/>} />
      <Route path='/gallary' element={<Gallary/>} />
    
      </Routes> */}
        
    {/* <div className="container-fluid d-flex w-100 border borderd">
      <div className="row-12 w-100 d-block text-start d-lg-flex">
          <div className="col py-5  bg-danger"> */}
           {/* <form action="" id ="loan-form">  <b>Loan Details</b><br></br>
             
             <label > Loan Amount</label>  <input type="number" placeholder="Amount" id="amount" />
       <br/>  <label > Intrerest</label> <input type="number" id="interest" placeholder="interest" />
       <br/>   <label > Loan Term</label> <input type="number" id="years" placeholder='Years to repay' />
       <br/><input type="submit" className="btn btn-dark btn-block" value="Calculate" />

 <p> <input type="number" placeholder="Amount" id="monthly-payment" disabled /></p>
             <p><input placeholder="total-amount" type="number" id='total-amount' disabled/></p>
         <p><input placeholder="total-interest" type="number" id='total-interest' disabled /></p> */}
{/* 
</form>  */}
{/* <form  className='container'>
<label htmlFor="amount" > Loan Amount</label>  
<input type="number" id="amount" value={pAmount} defaultValue={pAmount} onChange={(event,vAmt)=>{setpAmount(vAmt)}} />{setpAmount}
       <br/>  <label htmlFor="interest" > Intrerest</label>
        <input type="number" id="interest" value={interest}  onChange={(event,vInt)=>{setInterest(vInt)}} />{setInterest}
       <br/>   <label htmlFor="loanTenture" > Loan Term</label> 
       <input type="text" id="loanTenture" value={duration} onChange={(event,vDur)=>{setDuration(vDur)}} />{setDuration}
       <input type="radio" name="btn" id="year" /><label htmlFor="year">year</label>
       <input type="radio" name="btn" id="month" /><label htmlFor="month">month</label>

       <br/><input type="Submit" className="btn btn-dark btn-block" value="Submit" id="calculate" />
<TableDetails/>
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
  </div> */}
  
      {/* <CalculatorHookForm /> */}
    
    
    </Router>


</>
  );
}
export default App;


// //         const amount =document.getElementById("amount");
// //         const interest =document.getElementById("interest");
// //         const years =document.getElementById('years');
// //         const monthlyPayment =document.getElementById('monthly-payment');
// // const totalPayment=document.getElementById('total-payment');
// // const totalInterest=document.getElementById('total-interest');
// // const principal = parseFloat(amount.value);
// // const calculatedInterest = parseFloat(interest.value)/100/12;

// // const calculatedPayment =parseFloat(years.value)*12;

// // const x =Math(1+ calculatedInterest, calculatedPayment);
// // const monthly =(principal* x * calculatedInterest)/(x-1);
// //     e.preventDefault();
// // }
//   return (
    
//   );
// }

// export default App; */}
