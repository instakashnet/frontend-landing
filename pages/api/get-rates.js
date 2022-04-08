export default async function getRates(req, res) {
  let rates = { buy: 0, sell: 0 };

  try {
    const response = await fetch("https://api.instakash.net/exchange-service/api/v1/client/rates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();

    console.log({ data });

    return res.status(200).json(rates);
  } catch (error) {
    return res.status(500).message("Ha ocurrido un error obteniendo el tipo de cambio.");
  }
}
