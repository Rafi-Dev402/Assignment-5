
let donationBtnCalssList = document.getElementById('donation-btn').classList;
let historyBtnCalssList = document.getElementById('history-btn').classList;
let btnContainerClassList = document.getElementById('btn-container').classList;
let cardSectionClassList = document.getElementById('card-section').classList;
let historySectionClassList = document.getElementById('history-section').classList;

const modal =document.getElementById('my_modal_1');


// blog-btn Function
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'faq.html';
})

// Donation Button Function
document.getElementById('donation-btn').addEventListener('click',function(){
    donationBtnCalssList.add('bg-btnBG');
    historyBtnCalssList.remove('bg-btnBG');

    cardSectionClassList.remove('hidden');
    historySectionClassList.add('hidden');
})

// History Button Function
document.getElementById('history-btn').addEventListener('click',function(){
    donationBtnCalssList.remove('bg-btnBG');
    historyBtnCalssList.add('bg-btnBG');

    cardSectionClassList.add('hidden');
    historySectionClassList.remove('hidden');

})

//NoaKhali Donation functions
document.getElementById('noakhaliDon-btn').addEventListener('click',function(){
    const mainBlance = htmlValueBtID('available-blance');
    const noakhali = htmlValueBtID('noalhaili-total');
    const inputBlance = inputValueByID('noakhali-input');
   
    
        
    
    if(mainBlance<inputBlance){
       
        return alert('Insufficient Balance')
    }
    if( isNaN(inputBlance) || inputBlance<=0 ){
        
        return alert('Enter a valid number of amount.')
    }
    else{
        const totalNoalhali = noakhali + inputBlance;
        document.getElementById('noalhaili-total').innerText = totalNoalhali.toFixed(2);
        const newMainBlance = mainBlance - inputBlance;
        document.getElementById('available-blance').innerText = newMainBlance.toFixed(2);
       

        const currentDateTime = new Date();
        console.log(currentDateTime);

        const div = document.createElement('div');
        div.classList.add("border-2");
        div.classList.add("p-8");
        div.classList.add("rounded-2xl");
        div.classList.add("mb-6");
        div.innerHTML = `
            <h2 class="text-headerTxt text-xl font-bold mb-4">${inputBlance} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
            <p class="text-descripTxt text-base font-light">Date: ${currentDateTime}</p>
        
        `
        document.getElementById('history-section').appendChild(div);

        // return alert(inputBlance +' Taka is successfully donated for famine-2024 at Noakhali, Bangladesh');
    } 
    
        document.getElementById('my_modal_1').showModal();


        
})