import animals, { useAnimals } from "./data";

// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);



// const {name: catName, sound: catSound } = cat;


// const {name ="Fluffy", sound = "Purr"} = cat;
// console.log(name);

// const {name, sound, feedingRequirements: {food, water}} = cat;

// console.log(food);

Details();
 
function Details(){
    const [cat, dog] = animals;
  const [animal, makeSound] = useAnimals(cat);
  console.log(animal);
  makeSound();
}