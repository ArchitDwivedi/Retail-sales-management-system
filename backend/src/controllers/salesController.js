import { fetchSales, fetchStats } from "../services/salesService.js";

export const getSales = async (req, res) => {
  try {
    const response = await fetchSales(req.query);
    res.json(response);
  } catch (error) {
    console.error("Error fetching sales:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getSalesStats = async (req, res) => {
  try {
    const response = await fetchStats();
    res.json(response);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Server Error" });
  }
};