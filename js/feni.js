
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
        
        const currentDateTime = new Date();
        console.log(currentDateTime);

        const div = document.createElement('div');
        div.classList.add("border-2");
        div.classList.add("p-8");
        div.classList.add("rounded-2xl");
        div.classList.add("mb-6");
        div.innerHTML = `
            <h2 class="text-headerTxt text-xl font-bold mb-4">${inputBlanceFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
            <p class="text-descripTxt text-base font-light">Date: ${currentDateTime}</p>
        
        `
        document.getElementById('history-section').appendChild(div);

        return alert('Donated complete for Flood Relief in Feni,Bangladesh')
    }    
})