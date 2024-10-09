import React, { useState } from 'react';

function Calculator() {
  // state to storage the values given by the user when filling the input fields
  const [userValues, setUserValues] = useState({
    amount: '10000',
    interest: ' 10 ',
    years: '60',
  });

  // state to storage the results of the calculation
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isResult: false,
  });

  // state to storage error message
  const [error, setError] = useState('');

  // event handler to update state when the user enters values

  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  // Note:
  // You can optionally write:
  //   const handleAmountInputChange = (event) =>
  //     setUserValues({ ...userValues, amount: event.target.value });

  //   const handleInterestInputChange = (event) =>
  //     setUserValues({ ...userValues, interest: event.target.value });

  //   const handleYearsInputChange = (event) =>
  //     setUserValues({ ...userValues, years: event.target.value });

  // Manage validations and error messages
  const isValid = () => {
    const { amount, interest, years } = userValues;
    let actualError = '';
    // Validate if there are values
    if (!amount || !interest || !years) {
      actualError = 'All the values are required';
    }
    // Validade if the values are numbers
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = 'All the values must be a valid number';
    }
    // Validade if the values are positive numbers
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = 'All the values must be a positive number';
    }
    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };

  // Handle the data submited - validate inputs and send it as a parameter to the function that calculates the loan
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError('');
      calculateResults(userValues);
    }
  };

  // Calculation
  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) ;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
    return;
  };

  // Clear input fields
  const clearFields = () => {
    setUserValues({
      amount: '',
      interest: '',
      years: '',
    });

    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    });
  };

  return (
<div className="container"> <div className="row d-block d-lg-flex"> 
  <div className="col">  <div className='calculator border borderd ms-5'>
<a href='/'> advertise discloser</a>

      <div className='form'>
        <h1>Personal Loan Calculator</h1>
        <p>Use this personal loan calculator to see the monthly payments and total cost of a personal loan.</p>
        {/* Display the error when it exists */}
        <p className='error'>{error}</p>
        <form className='container' onSubmit={handleSubmitValues}>
        <div className="row"></div>
          {/* ternary operator manages when the calculator and results will be displayed to the user */}
          {!results.isResult ? (
            //   Form to collect data from the user
            <div className='form-items'>
              <b>loan detail</b>
              <div>
                <label id='label'>Amount:</label>
               <br></br> <input
                  type='text'  className='form-control'
                  name='amount'
                  placeholder='Loan amount'
                  value={userValues.amount}
                  // onChange method sets the values given by the user as input to the userValues state
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Interest:</label>
                <br></br> <input
                  type='text'
                  name='interest'  className='form-control'
                  placeholder='Interest'
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Months</label>
                <br></br> <input
                  type='text'
                  name='years' value={userValues.years}
                  placeholder='Monthly to repay'  className='form-control'
                  onChange={handleInputChange}
                />
              </div>
              {/* <input type="date" name="" id="" /><br /> */}
              <input type='submit' className='btn btn-primary' />
            </div>
          ) : (
            //   Form to display the results to the user
            <div className='form-items'>
              <h4>
                Loan amount: ${userValues.amount} <br /> Interest:{' '}
                {userValues.interest}% <br /> Months to repay: {userValues.years}
              </h4>
              {/* <div>
                <label id='label'>Monthly Payment:</label>
                <input type='text' value={results.monthlyPayment} disabled />
              </div> */}
              <div>
                <label id='label'>Total Payment: </label>
                <input type='text' value={results.totalPayment} disabled />
              </div>
              <div>
                <label id='label'>Total Interest:</label>
                <input type='text' value={results.totalInterest} disabled />
              </div>
              {/* Button to clear fields */}
              <input
                className='button'
                value='Calculate again'
                type='button'
                onClick={clearFields}
              />
            </div>
          )}
        </form>
      
        <div class="accordion-item">
        
    <h2 class="accordion-header">
      
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      ADD ORIGINATION FEES
      </button>
    
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">How will origination fees be paid? </div>
      <div class="form-check">
  <input class="" type="radio" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="" type="radio" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
    </div>
  
  </div>
    
      </div>
      <div className="container border borderd">
  <div className="row border borderd">
    <div className="col">

    </div>
    <div className="col">

      
    </div>
  </div>



  </div>
  </div>    </div>
  <div className="col">
    Your Loan estimated 
    <h1>
    <input type='text' value={results.monthlyPayment} disabled />

    </h1>
    <div className="row border borderd ms-5">
      <div className="col">
        
      </div>
      <div className="col"><b>Total principal</b></div>
      <div className="col border borderd"><b><input
                  type='text' className='form-control'
                  name='amount'
                  placeholder='Loan amount'
                  value={userValues.amount}
                  // onChange method sets the values given by the user as input to the userValues state
                  onChange={handleInputChange}
                /></b></div>

    </div>
    <div className="row ms-5">
      <div className="col border borderd ms-5"><b>Total Interest payment</b></div>
    <div className="col border borderd"><input  className='form-control' type='text' value={results.totalInterest} disabled />
                </div>
    </div>
  </div>
    </div>    </div>    
  );
}

export default Calculator;
