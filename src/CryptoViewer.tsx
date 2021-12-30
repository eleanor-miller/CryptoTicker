import React, { Key, useEffect, useState } from "react";
import { Coin, CoinData, getCryptos } from "./CryptoHTTPService";

export default function CryptoViewer() {
  const [coins, setCoins] = useState<CoinData>({ data: [], timestamp: 0});

  useEffect(() => {
    getCryptos().then((response as CoinData);
  });
}, []);