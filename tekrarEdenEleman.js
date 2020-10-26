/*
bu fonksiyon verilen bir dizide en çok tekrar eden elemanı ve kaç defa tekrar ettiğini geri dönüş bilgisi olarak gönderiyor.
*/
function enCokTekrar(arr){
  var tekrar = 0;
  var sonuc = 0;
  var num=0;
  arr.sort((a,b)=> a-b)
  for(let i=0;i<arr.length-1;i++){
    if(arr[i] === arr[i+1]) tekrar += 1;
    else{
      if(tekrar > sonuc) {sonuc = tekrar;num = arr[i]}
      tekrar = 0;
    }
  }
   return sonuc+1 + " " +num;
}
var dizi = [1,5,5,5,3,3,1,2,2,2,2,2,2,2,2,8,1,4,7];
console.log(enCokTekrar(dizi))