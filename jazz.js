function jazzify(s){
    const num = 7; 
    let new_S = [];
    for(let i = 0; i<s.length; i++){
    
      if (s[i].includes("7")) {
          return s
      } else {
        new_S.push(s[i]+"7");
        // console.log(new_S);
      }
    }
    return new_S;
  }
  console.log(jazzify(["A7","B","C"]));