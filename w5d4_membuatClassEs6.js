class Mobil{
  constructor(merek, harga, warna, bensin, roda){
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bensin = bensin;
    this.roda = roda;
  }

  tampilkanSpesifikasi(){
    return 'Mobil saya bermerek '+this.merek+' dengan harga '+this.harga+' rupiah, berwarna '+this.warna+', bensinnya '+this.bensin+' dan beroda '+this.roda;
  }

  jualMobil(){
    const disc = this.harga-(this.harga * 0.2);
      return 'Jika dikurang 20% harganya menjadi '+disc+' rupiah';
  }
}

let spek = new Mobil('Hando', 300000000, 'Merah', 'Solar', 4);

console.log(spek.tampilkanSpesifikasi());
console.log(spek.jualMobil());
