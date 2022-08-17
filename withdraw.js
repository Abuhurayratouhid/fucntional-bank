// console.log('connected')

// step 1 set the event handler 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('btn withdraw clicked')

    // step 2 get the withdraw input  
    const newWithdrawinput = document.getElementById('withdraw-input');
    const newWithdrawinputString = newWithdrawinput.value ;
    const newWithdrawinputAmount = parseFloat(newWithdrawinputString)
    // console.log(newWithdrawinputAmount)

    // step 3 clear the withdraw input field 
    newWithdrawinput.value = '';


    // step 4 
    const preWithdrawElement = document.getElementById('total-withdraw')
    const preWithdrawAmountString = preWithdrawElement.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawAmountString)
    // console.log(preWithdrawAmount)

    

    // step 5 calculation 
    const newWithdrawTotal = preWithdrawAmount + newWithdrawinputAmount;
    preWithdrawElement.innerText = newWithdrawTotal;
     
    

    // step 6 
    const preBalanceElement = document.getElementById('total-balance');
    const preBalanceElementString = preBalanceElement.innerText;
    const preBalanceElementAmount = parseFloat(preBalanceElementString);
    // console.log(preBalanceElementAmount)


    // step 7 calculation and set new balance 
    const newBalanceAmount = preBalanceElementAmount - newWithdrawinputAmount;
    preBalanceElement.innerText= newBalanceAmount;
})