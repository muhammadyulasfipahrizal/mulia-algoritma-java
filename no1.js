//deklarasi prompt 'npm install prompt-sync'
const prompt = require('prompt-sync')();

//menu pilihan
console.log('menu pilihan :')
console.log('1. luas persegi panjang')
console.log('2. luas lingkaran')
console.log('3. luas segitiga sama kaki')
console.log('0. selesai')

//input pilih menu
const inputMenu = prompt('pilih menu anda : ')

//menjalankan program
if (inputMenu == 1) {
  persegiPanjang();
} else if (inputMenu == 2){
  lingkaran();
} else if (inputMenu == 3){
  segitiga();
} else if (inputMenu == 0){
  return;
}

// segitiga
function segitiga(){
  const alas = prompt('input alas segitiga : ');
  const tinggi = prompt('input tinggi segitiga : ');

  // perhitungan area
  const luas = (alas * tinggi) / 2;

  console.log(
    `luas area segitiga adalah ${luas}`
    );
};

//persegi panjang
function persegiPanjang(){
  const panjang = prompt('input panjang persegi panjang : ')
  const lebar = prompt('input lebar persegi panjang : ')

    // perhitungan area
    const luas = (panjang * lebar);

    console.log(
      `luas area persegi panjang adalah ${luas}`
      );
};

//lingkaran
function lingkaran(){
  const jari = prompt('input jari-jari lingkaran : ')
  var phi = 3.14;

    // perhitungan area 
    const luas = (jari * 2 * phi);

    console.log(
      `luas area lingkaran adalah ${luas}`
      );
};