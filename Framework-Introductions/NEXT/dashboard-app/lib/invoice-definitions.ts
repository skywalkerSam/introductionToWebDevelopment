export type Invoice = {
  customer_id: number;
  amount: number;
  status: "pending" | "paid";
  date: string;
}

// export type Invoice = {
//     id: string;
//     customer_id: string;
//     amount: number;
//     date: string;
//     // In TypeScript, this is called a string union type.
//     // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//     status: 'pending' | 'paid';
//   };
