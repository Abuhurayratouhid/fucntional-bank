// console.log('i am java')
// step 1 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('btn clicked')
    // step 2 
    const depositInput = document.getElementById('deposit-input');
    const newDepositString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositString)

    // step 3
    const totalDeposit = document.getElementById('total-deposit');
    const preTotalDepositString = totalDeposit.innerText;
    const  totalDepositAmount = parseFloat(preTotalDepositString)

    // step 4 calculation 
    const currentTotalDeposit = totalDepositAmount + newDepositAmount;
    totalDeposit.innerText = currentTotalDeposit;
    // console.log(totalDepositAmount)

    // step 5 get the balance
    const preTotalBalance = document.getElementById('total-balance');
    const preTotalBalanceString = preTotalBalance.innerText;
    const preTotalBalanceAmount = parseFloat(preTotalBalanceString);

    // step 6 set the new balance total
    const newBalanceTotal = preTotalBalanceAmount + newDepositAmount;
    preTotalBalance.innerText = newBalanceTotal;





    // clear the input feild after gettin the value 
    depositInput.value = '';
})