import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useSalesStats = () => {
  const [stats, setStats] = useState({
    totalUnits: 0,
    totalAmount: 0,
    totalDiscount: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const response = await apiClient.get("/sales/stats");
        setStats(response.data);
      } catch (err) {
        console.error("Failed to load sales stats", err);
      }
    };

    loadStats();
  }, []);

  return stats;
};

export default useSalesStats;
