
function togglePaymentFields() {
    var paymentOption = document.querySelector('input[name="paymentOption"]:checked').value;
    var creditCardFields = document.getElementById('creditCardFields');
    var netBankingFields = document.getElementById('netBankingFields');
    var debitCardFields = document.getElementById('debitCardFields');
    var paypalFields = document.getElementById('paypalFields');
    
    creditCardFields.style.display = 'none';
    netBankingFields.style.display = 'none';
    debitCardFields.style.display = 'none';
    paypalFields.style.display = 'none';
    
    if (paymentOption === 'creditCard') {
      creditCardFields.style.display = 'block';
    } else if (paymentOption === 'netBanking') {
      netBankingFields.style.display = 'block';
    } else if (paymentOption === 'debitCard') {
      debitCardFields.style.display = 'block';
    } else if (paymentOption === 'paypal') {
      paypalFields.style.display = 'block';
    }
  }

  
function submitPayment(event) {
    event.preventDefault();
    var transactionId = generateTransactionId();
  
   
    window.location.href = 'success.html?transactionId=' + transactionId;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var transactionIdElement = document.getElementById('transactionId');
    if (transactionIdElement) {
      var transactionId = generateTransactionId();
      transactionIdElement.innerText = transactionId;
    }
  });
  
  function generateTransactionId() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  
  function redirectToPayPal() {
    window.location.href = 'https://www.paypal.com';
  }

  