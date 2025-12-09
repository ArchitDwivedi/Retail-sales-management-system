import React from "react";

const SalesTable = ({ rows }) => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Product Category</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th>Customer Region</th>
          <th>Product ID</th>
          <th>Employee Name</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((item, i) => (
          <tr key={i}>
            <td>{item.transactionId}</td>
            <td>{item.date}</td>
            <td>{item.customerId}</td>
            <td>{item.customerName}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.gender}</td>
            <td>{item.age}</td>
            <td>{item.productCategory}</td>
            <td>{item.quantity}</td>
            <td>₹ {item.finalAmount.toLocaleString()}</td>
            <td>{item.customerRegion}</td>
            <td>{item.productId}</td>
            <td>{item.employeeName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
