console.log(limesToCut(42, ['small', 'small', 'large', 'medium', 'small']));
function limesToCut(wedgesNeeded, limes) {
  let i = 0; 
  let limes_count = 0;
  while(true){
    if(!(wedgesNeeded <= 0)){
      if(limes[i] === 'small') {
        wedgesNeeded -= 6;
        limes_count += 1;
        i++;
      }
      else if(limes[i] === 'medium'){
        wedgesNeeded -= 8;
        limes_count += 1;
        i++;
      }
      else if(limes[i] === 'large'){
        wedgesNeeded -= 10;
        limes_count += 1;
        i++;
      }
    }
    else{
      break;
    }
   
  }
  return limes_count;
  
}