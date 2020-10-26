function birlesme(arr1,arr2){
  let dizi = arr1.concat(arr2);
  dizi.sort();
  for(let i=0;i<dizi.length;i++){
    if(dizi[i]===dizi[i+1]){
      dizi.splice(i,1)
      i -= 1;
    }               
  }
  return dizi;
}
function main(){
  console.log(birlesme([1,2,5,6,4,7],[4,5,6,8,9]));
  console.log(birlesme(["armut","kiraz","elma"],["elma","kayısı"]));
  console.log(birlesme([-1,-8,6,5,1],[-1,4,7,4,1,-5]));
}
main();