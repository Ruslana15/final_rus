import React from "react";
import CryptoItem from "./CryptoItem";

function CryptoList({ cryptos }) {
  return (
    <div>
      {cryptos.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default CryptoList;
