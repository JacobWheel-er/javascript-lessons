let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnerAge = 18;

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log (`Number ${raceNumber}, your race starts at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log (`Number ${raceNumber}, your race starts at 11 am.`);
} else {
  console.log ('See the registration desk for further information.');
}

if (runnerAge < 18) {
  console.log (`Number ${raceNumber}, your race starts at 12:30 pm.`);
}
