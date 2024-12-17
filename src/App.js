import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import SearchBar from "./components/SearchBar";
import CryptoList from "./components/CryptoList";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]); // Данные с API
  const [filteredCryptos, setFilteredCryptos] = useState([]); // Данные для поиска
  const [loading, setLoading] = useState(false);

  // Загрузка данных с API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coinlore.net/api/tickers/"
      );
      setCryptos(response.data.data);
      setFilteredCryptos(response.data.data); // Копия для поиска
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // Загрузка данных при старте
  useEffect(() => {
    fetchData();
  }, []);

  // Обновление данных
  const handleUpdate = () => {
    fetchData();
  };

  // Обновление фильтра при поиске
  const handleSearch = (query) => {
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Cryptocurrency Prices
      </Typography>
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
      <SearchBar onSearch={handleSearch} />
      <CryptoList cryptos={filteredCryptos} />
      {loading && <Typography>Loading...</Typography>}
    </Container>
  );
}

export default App;
