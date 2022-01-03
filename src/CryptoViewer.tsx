import React, { Key, useEffect, useState } from "react";
import { Coin, CoinData, getCryptos } from "./CryptoHTTPService";

export default function CryptoViewer() {
  const [coins, setCoins] = useState<CoinData>({ data: [], timestamp: 0 });

  useEffect(
    function () {
      if (!coins.data.length)
        getCryptos().then((response) => {
          setCoins(response as CoinData);
          console.log(coins.data);
        });
      // If useEffect sets up something that consumes
      // a resource, like an interval identifier
      const timerInterval = setInterval(function () {
        console.log("Calling my interval");
        getCryptos().then((response) => {
          setCoins(response as CoinData);
          console.log(coins.data);
        });
      }, 10000);

      // ... then we near a teardown function to undo
      //     that resource
      function teardown() {
        console.log("clearing the interval");
        clearInterval(timerInterval);
      }

      // ... and we return that function!
      return teardown;
    },
    [coins]
  );

  return (
    <>
      <p>{coins.data.length ? "" : "Loading coins..."}</p>
      <table>
        <tbody>
          {coins.data.map((coin: Coin) => (
            <tr key={coin?.rank as Key}>
              <td>{coin?.rank}</td>
              <td>
                <img
                  src={
                    "https://cryptoicon-api.vercel.app/api/icon/" +
                    coin?.symbol?.toLowerCase()
                  }
                />
              </td>
              <td>{coin?.symbol}</td>
              <td>{coin?.id}</td>
              <td>{coin?.priceUsd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}