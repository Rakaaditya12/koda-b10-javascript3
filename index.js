// Program pertama
for (let x = 0; x < 5; x++) {
  let row = "";
  for (let y = 0; y < 5; y++) {
    row += " *";
  }

  console.log(row);
}

// Program kedua
for (let i = 0; i < 5; i++) {
  let cols = "";

  for (let a = 0; a <= i; a++) {
    cols += " *";
  }

  console.log(cols);
}

// Program ketiga
let tinggiBaris = 5;

for (let i = 0; i < tinggiBaris; i++) {
  let pattern = "";

  for (let a = 0; a < tinggiBaris; a++) {
    if (a < 4 - i) {
      pattern += " ";
    } else {
      pattern += " *";
    }
  }

  console.log(`${pattern}`);
}

// Program keempat

for (let x = 1; x <= 5; x++) {
  let row = "";

  for (let y = 1; y <= 5; y++) {
    if (x === 1 || x === 5 || y === 1 || y === 5) {
      row += " *";
    } else {
      row += "  ";
    }
  }

  console.log(row);
}
