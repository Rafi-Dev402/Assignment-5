document.getElementById('Quota-donate-btn').addEventListener('click', function(){
    const mainBlance = htmlValueBtID('available-blance');
    const quota = htmlValueBtID('quota-total');
    const inputBlanceQuota = inputValueByID('quota-input');
        
    
    if(mainBlance<inputBlanceQuota){
        return alert('Insufficient Blance')
    }
    if(isNaN(inputBlanceQuota) || inputBlanceQuota<0){
        return alert('Enter a valid number of amount.')
    }
    else{
        const totalQuota = quota + inputBlanceQuota;
        document.getElementById('quota-total').innerText = totalQuota.toFixed(2);
        const newMainBlance3 = mainBlance - inputBlanceQuota;
        document.getElementById('available-blance').innerText = newMainBlance3.toFixed(2);
        return alert('Donation Complete');
    }    
})