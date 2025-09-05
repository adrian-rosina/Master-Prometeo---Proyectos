const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    const count = {};

    for(let i= 0; i< list.length; i++){
        const word = list[i];
        if(count[word]){
            count[word] = count[word] +1;
        }else{
            count[word] = 1;
        }
    }
    let result = "";
    for (let word in count){
        result += word + ":" + count[word] + ", ";
    }
    result = result.slice(0, -2);
    return result;
  }
  console.log(repeatCounter(words));