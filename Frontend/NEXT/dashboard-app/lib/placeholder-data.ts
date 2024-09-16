import { Invoice } from "./invoice-definitions";

const customers = [
  { id: 1 },
  { id: 2 },
  // ...
];

export const invoices: Invoice[] = [
  {
    customer_id: customers[0]?.id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1]?.id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  // ...
];
