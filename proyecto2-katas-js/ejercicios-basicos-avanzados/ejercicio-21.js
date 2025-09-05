const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const minorAged = [];
  const mayorAged = [];

  for(let user of users){
    if (user.years<18){
        minorAged.push(user);
    }else{
        mayorAged.push(user);
    }
  }

  console.log("Menores: ", minorAged);
  console.log("Mayores: ", mayorAged);