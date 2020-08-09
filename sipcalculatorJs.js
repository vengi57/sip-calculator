calculateResult=()=>{
    let amountValue = document.getElementById("investment").value;
    let amountWithComma = (amountValue.split(" ")[0]);
    let amount = parseInt(amountWithComma.split(',').join(''));

    let years = document.getElementById("years").value;

    let returnRateValue = document.getElementById("return-rate").value;
    let returnRateWithComma = (returnRateValue.split(" ")[0]);
    let returnRate = parseInt(returnRateWithComma.split(',').join(''));

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
    total = total.toString();
    total = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    wealthGained = wealthGained.toString();
    wealthGained = wealthGained.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    maturityValue = maturityValue.toString();
    maturityValue = maturityValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById("total").innerHTML =  total;
    document.getElementById("wealth-gained").innerHTML = wealthGained;
    document.getElementById("maturity-value").innerHTML =  maturityValue;
}

currencyChange=()=>{
        let selectedValue = currency.value;
        document.getElementById("currency-change-1").innerHTML = selectedValue;
        document.getElementById("currency-change-2").innerHTML = selectedValue;
        document.getElementById("currency-change-3").innerHTML = selectedValue;

}

commas=(x)=> {
    let amount = document.getElementById("investment").value;
    let temp = amount.split(" ")
    if(temp.includes("Rs")){
        amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("investment").value = amount.concat(' ').concat('Rs')
    }
}
percentage=(x)=>{
    let value = document.getElementById("return-rate").value;
    let temp = value.split(" ");
    if(temp.length<2)
        document.getElementById("return-rate").value = value.concat(' ').concat('%')
}

