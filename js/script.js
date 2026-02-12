


async function getBTC() {
  try {
  const response = await fetch('https://api.mercadobitcoin.net/api/v4/symbols');
  const data = await response.json();



 

       const price = data.bpi.USD.rate;

    // Paneme selle HTML-i
    document.getElementById("count").innerText = price;


  }
}

getBTC();



