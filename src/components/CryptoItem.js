import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CryptoItem({ crypto }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{crypto.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong>Symbol:</strong> {crypto.symbol} <br />
          <strong>Price USD:</strong> {crypto.price_usd} <br />
          <strong>Price BTC:</strong> {crypto.price_btc} <br />
          
          {/* Tooltip для Market Cap */}
          <Tooltip 
            title="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price"
            arrow
          >
            <span style={{ cursor: 'pointer' }}>
              <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
            </span>
          </Tooltip>
          <br />

          <strong>
            Percent Change 24H:{" "}
            <span
              style={{
                color: crypto.percent_change_24h >= 0 ? "green" : "red",
              }}
            >
              {crypto.percent_change_24h}%
            </span>
          </strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CryptoItem;
