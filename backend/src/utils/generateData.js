import fs from "fs";
import { faker } from "@faker-js/faker";

const generateData = (count = 400) => {
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      transactionId: faker.string.alphanumeric(8).toUpperCase(),
      date: faker.date.anytime().toISOString().split("T")[0],
      customerId: "CUST" + faker.number.int({ min: 10000, max: 99999 }),
      customerName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      gender: faker.person.sex(),
      age: faker.number.int({ min: 18, max: 65 }),
      productCategory: faker.helpers.arrayElement([
        "Clothing",
        "Home",
        "Electronics",
        "Grocery",
      ]),
      productId: "PROD" + faker.number.int({ min: 1, max: 999 }).toString().padStart(4, "0"),
      quantity: faker.number.int({ min: 1, max: 5 }),
      finalAmount: faker.number.int({ min: 300, max: 20000 }),
      customerRegion: faker.helpers.arrayElement(["North", "South", "East", "West"]),
      employeeName: faker.person.fullName(),
    });
  }

  fs.writeFileSync("./src/data/sales.json", JSON.stringify(data, null, 2));
  console.log("Generated dataset with", count, "records");
};

generateData();
