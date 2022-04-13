const person1 = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal'
  };
  
  // Destructure the object so that the three console.log below work correctly
  console.log(`Hello, ${name}.`);
  console.log(`You are ${age} years old.`);
  console.log(`Your favorite music is ${favoriteMusic}.`);
  
  // Destructure with a default value so that the console.log below works
  console.log(`You come from ${country}.`);
  
  // Destructure and rename so that the console.log below works
  console.log(`Hello, ${fullName}.`); // => Hello, Ironhacker.
  

  // Nested objects and destructuring
  
  const person2 = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal',
    address: {
      street: 'Super Cool St',
      number: 123,
      city: 'Miami'
    }
  };
  

  // Do a nested destructuring so that the console.log below works
  
  console.log(`${name} lives in ${number} ${street}, city of ${city}.`);
  // ==> Ironhacker lives in 123 Super Cool St, city of Miami.