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

function createAnimal(animalType) {
  return function addDeadlyDevice(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    };
  };
};

sharkCreator = createAnimal('Shark');
sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam');
sharkWithFrickinCannon = createAnimal('Shark')('Cannon');
