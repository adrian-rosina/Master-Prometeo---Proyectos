const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList) {
    const index = nameList.indexOf("Natasha");
    if (index !== -1){
        return { exists: true, position: index}
  }else{
    return{exists: false};
  }
}
console.log(nameFinder(names));