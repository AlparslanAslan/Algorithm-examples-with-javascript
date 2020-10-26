//filtreleme fonksiyonu argüman olarak iki dizi ve bir sayısal deger alır. İlk dizi kişilerin yaşlarını, ikinci dizi sırasıyla isimlerini tutar.
//old sayısal degeri filtreleme yapılacak minimum degeri belirtir. Fonksiyon yaşı old değerinden büyük olan her kişinin ismini ekrana basar.
function filtreleme(arrIsim,arrYas,yas){
  let filtredArr = [];
  let newArrYas = [];
  for(let i=0;i<arr2.length;i++){
    newArrYas.push([arr2[i],i]);
  }
  newArrYas = newArrYas.sort((a,b)=> a[0]-b[0]);
  newArrYas = newArrYas.filter((element)=> element[0]>=yas)
  for(let i=0;i<newArrYas.length;i++){
   filtredArr.push(arr1[newArrYas[i][1]]);
  }
 return filtredArr;
}
var arr1 = ["ali","ahmet","yusuf","beyza","beril","selen"];
var arr2 = [12,18,31,17,23,14];
console.log(filtreleme(arr1,arr2,18));