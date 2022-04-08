export async function getRates() {
  let rates = { buy: 0, sell: 0 };

  try {
    const res = await fetch("https://api.instakash.net/exchange-service/api/v1/client/rates");
    const fetchedData = await res.json();

    rates = {
      buy: Number(fetchedData[0].buy),
      sell: Number(fetchedData[0].sell),
    };

    return rates;
  } catch (error) {
    throw error;
  }
}

export async function getCounters() {
  try {
    const res = await fetch("https://api.instakash.net/exchange-service/api/v1/client/analytics/general");
    const fetchedData = await res.json();

    return fetchedData;
  } catch (error) {
    throw error;
  }
}
