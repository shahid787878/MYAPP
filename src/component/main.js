document.getElementById('loan-form').addEventListener('submit',calculateResults);
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