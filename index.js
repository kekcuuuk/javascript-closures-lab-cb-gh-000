function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  };

  function getBumps() {
    return counter;
  };

  return {
    addBump,
    getBumps
  };
};

// function createAnimal(animalType) {
//   function addDeadlyDevice(deadlyDevice) {
//     return {
//       animalType,
//       deadlyDevice
//     };
//   };
// };
