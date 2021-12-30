
id": "bitcoin",
"rank": "1",
"symbol": "BTC",
"name": "Bitcoin",
"supply": "18901968.0000000000000000",
"maxSupply": "21000000.0000000000000000",
"marketCapUsd": "930578527077.0902520637259760",
"volumeUsd24Hr": "22340374060.9950920755402059",
"priceUsd": "49231.8327423414457195",
"changePercent24Hr": "1.9032346179621998",
"vwap24Hr": "48290.0728960096500516",
"explorer": "https://blockchain.info/"

export async function getCryptos() {
  const response = await fetch("https://api.coincap.io/v2/assets/", {
    method: "GET",
    headers: { "content-type": "applications/json" } ,
}).then(() => response);
}