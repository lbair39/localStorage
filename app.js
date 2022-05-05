// 'use script'

// const myArray = ['milk', 'coffee', 'tea', 'soda', 'water'];

//     console.log (myArray);

// const textArray = JSON.stringify(myArray);

//     console.log(textArray);

// localStorage.setItem("storedArray", textArray);
//     console.log(localStorage);

// let unstoredArray = localStorage.getItem ("storedArray");

// let newArray = JSON.parse(unstoredArray);
// document.write(newArray[3]);



const pet = {
    species: "Dog",
    breed: "German Shepherd",
    name: "Duke",
}
  console.log(pet);
  let petString = JSON.stringify(pet);
  console.log(petString);
  localStorage.setItem("storedPet", petString);
  let unstoredPet = localStorage.getItem("storedPet");
  let myPet = JSON.parse(unstoredPet);
  console.log(myPet);
  const myNewPet = "My new pet is a " + myPet.species + ". He is a " + myPet.breed + ", And his name is " + myPet.name + "!";
  const section = document.getElementById("mainSection");
  const h2elm = document.createElement('h2');
  h2elm.textContent = myNewPet;
  section.appendChild(h2elm);
  
  
  const animals = ["Cat", "Fish", "Lion", "Wolf", "Otter", "Seal", "Bear"];
  let animalsString = JSON.stringify(animals);
  localStorage.setItem("myArray", animalsString);
  let unstoredArray = localStorage.getItem("myArray");
  let newAnimals = JSON.parse(unstoredArray);
  const h3elm = document.createElement('h3');
  h3elm.textContent = "My favorite animal is: " + newAnimals[6];
  section.appendChild(h3elm);