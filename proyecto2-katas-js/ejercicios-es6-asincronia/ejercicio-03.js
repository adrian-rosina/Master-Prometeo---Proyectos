// 3.1 - Obtener un array con los nombres usando .map()
const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
  ];
  
  const userNames = users.map(user => user.name);
  
  console.log(userNames); 
  
  
  // 3.2 - Cambiar el nombre a 'Anacleto' si empieza por 'A'
  const users2 = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
  ];
  
  const modifiedNames = users2.map(user => 
    user.name.startsWith('A') ? 'Anacleto' : user.name
  );
  
  console.log(modifiedNames); 
  
  
  const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
  ];
  
  const visitedCities = cities.map(city => 
    city.isVisited ? `${city.name} (Visitado)` : city.name
  );
  
  console.log(visitedCities); 
