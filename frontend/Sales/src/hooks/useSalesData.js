import { useEffect, useState } from "react";
import { getSales } from "../services/salesService";

const useSalesData = (queryState) => {
  const [state, setState] = useState({
    rows: [],
    meta: {},
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((s) => ({ ...s, loading: true }));
        const result = await getSales(queryState);
        setState({
          rows: result.data,
          meta: result.meta,
          loading: false,
          error: "",
        });
      } catch (err) {
        console.error(err);
        setState({
          rows: [],
          meta: {},
          loading: false,
          error: "Something went wrong",
        });
      }
    };

    fetchData();
  }, [queryState]);

  return state;
};

export default useSalesData;
