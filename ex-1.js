function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let n = customers.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let customer = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = customer;
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
// n^2 เนื่องจากมี loop ซ้อนกัน 2 รอบ
