let nilai = prompt(`Masukan Nilai anda : `);
if (nilai < 20) {
  confirm('Nilai Anda adalah E');
} else if (nilai < 40) {
  confirm('Nilai Anda Adalah D');
} else if (nilai < 60) {
  confirm('Nilai Anda adalah C');
} else if (nilai < 80) {
  confirm('Nilai Anda adalah B');
} else if (nilai <= 100) {
  confirm('Nilai Anda Adalah A');
} else {
  confirm('yahhh, anda tidak memasukkan angka 1 sampai 100.');
}
