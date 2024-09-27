document.getElementById('Quota-donate-btn').addEventListener('click', function(){
    const mainBlance = htmlValueBtID('available-blance');
    const quota = htmlValueBtID('quota-total');
    const inputBlanceQuota = inputValueByID('quota-input');
   
    
        
    
    if(mainBlance<inputBlanceQuota){
        
        return alert('Insufficient Balance');
    }
    if(isNaN(inputBlanceQuota) || inputBlanceQuota<=0){
        
        return alert('Enter a valid number of amount.')
    }
    else{
        const totalQuota = quota + inputBlanceQuota;
        document.getElementById('quota-total').innerText = totalQuota.toFixed(2);
        const newMainBlance3 = mainBlance - inputBlanceQuota;
        document.getElementById('available-blance').innerText = newMainBlance3.toFixed(2);
        
        const currentDateTime = new Date();
        console.log(currentDateTime);

        const div = document.createElement('div');
        div.classList.add("border-2");
        div.classList.add("p-8");
        div.classList.add("rounded-2xl");
        div.classList.add("mb-6");
        div.innerHTML = `
            <h2 class="text-headerTxt text-xl font-bold mb-4">${inputBlanceQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
            <p class="text-descripTxt text-base font-light">Date: ${currentDateTime}</p>
        
        `
        document.getElementById('history-section').appendChild(div);
        
        // return alert(inputBlanceQuota +' Taka is successfully donated for Aid for Injured in the Quota Movement, Bangladesh');

    }    
        document.getElementById('my_modal_1').showModal();

        
})