var loan = document.getElementById('loan')
var per = document.getElementById('percient')
var salary = document.getElementById('salary')
var years = document.getElementById('years')

function calculato(){
    monthlyPayment = loan.value * (100 + Number(per.value)) / (Number(years.value) * 12 * 100)
    if (monthlyPayment <= Number(salary.value)){
        totalPayment = loan.value * (100 + Number(per.value)) / 100
        totalInterest = loan.value * Number(per.value)
        var cuai = 'yes U can afford it'
        document.getElementById('Mpayment').innerHTML = monthlyPayment
        document.getElementById('Tpayment').innerHTML = totalPayment
        document.getElementById('Tinterest').innerHTML = totalInterest
        document.getElementById('CUAI').innerHTML = cuai
        console.log(monthlyPayment)
        document.getElementById('results').style.display = 'block'
    }
    else{
    document.getElementById('CUAIno').innerHTML = 'NO U can\'t'
    document.getElementById('test').style.display = 'block'
    }
}

