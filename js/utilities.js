
//Convart a input value string to number
function inputValueByID(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

//Convart a inner Html string to number
function htmlValueBtID(id){
    const htmlValue = parseFloat(document.getElementById(id).innerText);
    return htmlValue;
}