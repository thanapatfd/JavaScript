console.log(limesToCut(42, ['small', 'small', 'large', 'medium', 'small']));
function limesToCut(wedgesNeeded, limes) {
  let wedge = 0;
  let count = 0;
  let total = 0;
  let lime_cut = 0;
  while(total < wedgesNeeded){
    switch (limes[count]) {
     case 'small': wedge = 6; break;
     case 'medium': wedge = 8; break;
     case 'large': wedge = 10; break;
     default:
      
   }
  count++;
  total += wedge;
  lime_cut++;
  }
  return lime_cut;
}