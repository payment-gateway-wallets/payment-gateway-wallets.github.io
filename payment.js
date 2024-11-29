const web3 = new Web3(window.ethereum);

document.getElementById('create-invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;

    // Create a new crypto invoice
    const invoiceLink = `https://your-crypto-payment-url.com/pay?amount=${amount}`;
    document.getElementById('invoice-link').innerHTML = `Pay via this link: <a href="${invoiceLink}" target="_blank">${invoiceLink}</a>`;
});

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amountToPay = document.getElementById('payment-amount').value;
    
    // Call the Ethereum network to process the payment
    web3.eth.sendTransaction({
        from: ethereum.selectedAddress,
        to: 'your-crypto-wallet-address',
        value: web3.utils.toWei(amountToPay, 'ether')
    }).then(tx => {
        alert('Payment Successful: ' + tx.transactionHash);
    }).catch(err => {
        alert('Payment failed: ' + err.message);
    });
});
