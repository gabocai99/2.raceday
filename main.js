let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var age = 18;

if (age > 18 && registeredEarly === true){
  raceNumber += 1000;
};

if (age > 18 && registeredEarly === true){
  console.log(`${raceNumber} will race at 9:30 am.`);
}
else if (age > 18 && registeredEarly === false){
  console.log(`${raceNumber} will race at 11:00 am.`);
}
else if (age < 18){
  console.log(`Youth registrants ${raceNumber} will race at 12:30 pm.`);
}
else if (age = 18){
  console.log(`${raceNumber} please see the registration desk`);
}