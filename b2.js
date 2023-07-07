function numberOneTriangle(num) {
  if (num < 1 || num > 10) {
    console.log("Số truyền vào không hợp lệ!");
    return;
  }

  let output = "";
  for (let i = 1; i <= num; i++) {
    output += "1".repeat(i) + "\n";
  }

  console.log(output);
}