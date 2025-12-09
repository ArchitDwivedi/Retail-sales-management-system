import Sales from "../models/Sales.js";

// MAIN SALES FETCH FUNCTION (MongoDB version)
export const fetchSales = async ({
  search,
  sortBy,
  sortOrder,
  page,
  pageSize,
  region,
  gender,
  productCategory,
  paymentMethod,
}) => {

  const query = {};

  // SEARCH (text search)
  if (search) {
    query.$or = [
      { customerName: { $regex: search, $options: "i" } },
      { phoneNumber: { $regex: search, $options: "i" } },
    ];
  }

  // REGION filter
  if (region) query.customerRegion = new RegExp("^" + region + "$", "i");

  // GENDER filter
  if (gender) query.gender = new RegExp("^" + gender + "$", "i");

  // PRODUCT CATEGORY filter
  if (productCategory) query.productCategory = new RegExp("^" + productCategory + "$", "i");

  // PAYMENT METHOD filter
  if (paymentMethod) query.paymentMethod = new RegExp("^" + paymentMethod + "$", "i");

  // PAGINATION
  const pageNumber = Number(page) || 1;
  const limit = Number(pageSize) || 10;
  const skip = (pageNumber - 1) * limit;

  // SORTING
  const sortQuery = {};
  if (sortBy) {
    sortQuery[sortBy] = sortOrder === "asc" ? 1 : -1;
  }

  // QUERY TO DATABASE
  const total = await Sales.countDocuments(query);
  const data = await Sales.find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(limit);

  return {
    data,
    meta: {
      total,
      page: pageNumber,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};


// STATS FUNCTION (Aggregation)
export const fetchStats = async () => {
  const result = await Sales.aggregate([
    {
      $group: {
        _id: null,
        totalUnits: { $sum: "$quantity" },
        totalAmount: { $sum: "$finalAmount" },
        totalDiscount: { $sum: "$discount" },
      },
    },
  ]);

  return result[0] || { totalUnits: 0, totalAmount: 0, totalDiscount: 0 };
};
