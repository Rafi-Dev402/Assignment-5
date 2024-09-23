
document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const mainBlance = htmlValueBtID('available-blance');
    const feni = htmlValueBtID('feni-total');
    const inputBlanceFeni = inputValueByID('Feni-input');
        
    
    if(mainBlance<inputBlanceFeni){
        return alert('Insufficient Blance')
    }
    if(isNaN(inputBlanceFeni) || inputBlanceFeni<0   ){
        return alert('Enter a valid number of amount.')
    }
    else{
        const totalFeni = feni + inputBlanceFeni;
        document.getElementById('feni-total').innerText = totalFeni.toFixed(2);
        const newMainBlance2 = mainBlance - inputBlanceFeni;
        document.getElementById('available-blance').innerText = newMainBlance2.toFixed(2);
        return alert('Donation Complete');
    }    
})