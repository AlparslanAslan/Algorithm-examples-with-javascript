/*
harcama fonksiyonu parametre olarak sayılardan oluşan bir dizi ve bir sayı değeri alır.
num parametresi harcanacak değerdir. Fonksiyon dizinin ilk elemanından başlayarak harcamaya başlar
her eleman sıfırlandığında diğerine geçer. Fonksiyon geri dönüş değeri olarak elde edilen yeni diziyi gönderir.
*/
function harcama(arr,num){
  for(let i=0;i<arr.length;i++){
    for(let j=arr[i];j > 0;j--) {
        if(num !== 0){
          num -= 1;
          arr[i] -= 1;
        }
    }

  }
  return arr;
}
let arr1 = [1,8,4,5,1,23,4,12,11,2,0,4];
console.log(harcama(arr1,17));
console.log(harcama([1,1,1],2));