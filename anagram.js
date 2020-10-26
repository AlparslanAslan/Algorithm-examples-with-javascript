function anagram(arr1,arr2){
  var x = new Map();
  for(let i=0;i<arr1.length;i++){
    let hesap = 0;
    if(x.has(arr1[i])){
      hesap = x.get(arr1[i]);
    }
    x.set(arr1[i],++hesap);
  }
  for(let j=0;j<arr2.length;j++){
   // let hesap = 0;
    if(x.has(arr2[j])){
      hesap = x.get(arr2[j])
    }
  x.set(arr2[j],hesap-1)
  }
  var tet =0;
  for(let i=0;i<arr1.length;i++){
    if(x.get(arr1[i]) !== 0) tet++;
  }
  if(tet === 0) return true;
   return false
}

function main(){
  console.log(anagram("layla","aylel"));
  
  
 // console.log(anagram("ren","daragaci"))
}
main()