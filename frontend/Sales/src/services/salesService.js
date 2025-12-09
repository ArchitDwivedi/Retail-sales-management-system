import apiClient from "./apiClient";

export const getSales = async (queryState) => {
  const { search, sortBy, sortOrder, page, pageSize, filters } = queryState;

  const params = {
    search,
    sortBy,
    sortOrder,
    page,
    pageSize,
    region: filters.region || "",
    gender: filters.gender || "",
  };

  const res = await apiClient.get("/sales", { params });
  return res.data;
};
