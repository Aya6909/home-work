const city = {
    name: "Алматы",
    population: 2000000,
    districts: [
      { name: "Бостандық", population: 300000 },
      { name: "Алмалы", population: 250000 },
    ],
  };
  
  let schools = [
    { name: "№1 мектеп", district: "Алмалы", students: 500 },
    { name: "№2 мектеп", district: "Бостандық", students: 700 },
  ];
  
  schools.push({ name: "№3 мектеп", district: "Медеу", students: 600 });
    
  schools[1].students = 750; 
  
  
  function CityPopulation(city) {
    let totalPopulation = city.population;
    return totalPopulation;
  }
  
  console.log(CityPopulation(city)); 
  
  function TotalStudents(schools) {
    return schools.reduce((total, school) => total + school.students, 0);
  }
  
  console.log(TotalStudents(schools)); 
  
  function findDistrict(city, districtName) {
    return city.districts.find(district => district.name === districtName);
  }
  
  console.log(findDistrict(city, "Бостандық"));