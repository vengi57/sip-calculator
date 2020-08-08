calculateResult=()=>{
    let amount = document.getElementById("investment").value;
    let years = document.getElementById("years").value;
    let returnRate = document.getElementById("return-rate").value;
    let checkedValue = document.getElementsByName('checked')[0].checked;
    let wealthGained = 0; total = 0;maturityValue = 0;
    if(checkedValue){
        wealthGained = Math.round((Math.pow((1 + (Math.pow((1 + returnRate / 100), (1 / 12)) - 1)), (years * 12)) - 1) / (Math.pow((1+ returnRate / 100), (1 / 12)) - 1) * amount);
        total = (amount*12)*years; 
    }else{
        total = amount;
        wealthGained = Math.round(Math.pow((1 + returnRate / 100), years) * amount);
    }
    maturityValue = wealthGained-total;
    document.getElementById("total").innerHTML = isNaN(total)? 0 : total;
    document.getElementById("wealth-gained").innerHTML = isNaN(wealthGained)? 0 : wealthGained;
    document.getElementById("maturity-value").innerHTML = isNaN(maturityValue)? 0 : maturityValue;
}

currencyChange=()=>{
        let selectedValue = currency.value;
        document.getElementById("currency-change-1").innerHTML = selectedValue;
        document.getElementById("currency-change-2").innerHTML = selectedValue;
        document.getElementById("currency-change-3").innerHTML = selectedValue;

}