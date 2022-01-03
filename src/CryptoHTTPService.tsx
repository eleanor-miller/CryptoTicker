export type Coin = {
  id: String | null;
  rank: String | null;
  symbol: String | null;
  name: String | null;
  supply: String | null;
  maxSupply: String | null;
  marketCapUsd: String | null;
  volumeUsd24Hr: String | null;
  priceUsd: String | null;
  changePercent24Hr: String | null;
  vwap24Hr: String | null;
  explorer: String | null;
};

export type CoinData = { data: Coin[]; timestamp: number };

export async function getCryptos<CoinData>() {
  const response = await fetch("https://api.coincap.io/v2/assets/", {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  if (response.ok) {
    const json = (await response.json()) as CoinData;
    return json;
  }
}