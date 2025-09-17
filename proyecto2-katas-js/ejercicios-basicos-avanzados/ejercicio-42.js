function swap(array, index1, index2) {
    
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
  }

  const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  console.log(swap(fantasticFour, 0, 3));

  
  console.log(swap(fantasticFour, 1, 2));
