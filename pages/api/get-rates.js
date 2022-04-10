export default async function getRates(req, res) {
  let rates = { buy: 0, sell: 0 };

  try {
    const response = await fetch("https://api.instakash.net/exchange-service/api/v1/client/rates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    rates = data[0];

    return res.status(200).json(rates);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Ha ocurrido un error obteniendo el tipo de cambio.");
  }
}
