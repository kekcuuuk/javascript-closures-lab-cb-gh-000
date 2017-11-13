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

  sharkWithFrickinLaserbeam;
};

sharkCreator = createAnimal('Shark');
sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
sharkWithFrickinCannon = sharkCreator('Cannon');
