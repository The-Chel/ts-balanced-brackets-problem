export function verify(str: string): boolean {
  const strIn = str;
  // const nested = [];
  let counter = true;
  for (let i = 0; i < strIn.length; i++) {
    
    if (strIn[i]==='(') {
      for (let k = i; k < strIn.length; k++) {
        if (strIn[k]===')') {
          counter = true;
          break;
        }  else {
          counter = false;
        }      
      }
    }
    if (strIn[i]==='{') {
      for (let k = i; k < strIn.length; k++) {
        if (strIn[k]==='}') {
          counter = true;
          break;
        }  else {
          counter = false;
        }      
      }
    }
    if (strIn[i]==='[') {
      for (let k = i; k < strIn.length; k++) {
        if (strIn[k]===']') {
          counter = true;
          break;
        }  else {
          counter = false;
        }      
      }
    }
    if (strIn[i]==='<') {
      for (let k = i; k < strIn.length; k++) {
        if (strIn[k]==='>') {
          counter = true;
          break;
        }  else {
          counter = false;
        } 
      }
    }
  }
  // console.log(counter);
  
  return counter;
}
// verify('----(+++++)-----');