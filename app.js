console.log('Program start');

var userInput = prompt('Young Padawan or Sith Apprentice! Please choose between: Death Star, X-Wing and Lightsaber to fight in the Star Wars');
var computerChoice = Math.floor(Math.random() * 3) + 1;

var cpuWeapon;

var weaponOne = 'Lightsaber';     // 1 Scissor
var weaponTwo = 'X-Wing'          // 2 Bag
var weaponThree = 'Death Star';   // 3 Stone

if (computerChoice === 1) {
  cpuWeapon = weaponOne;
} else if (computerChoice === 2) {
  cpuWeapon = weaponTwo;
} else {
  cpuWeapon = weaponThree;
}
console.log(cpuWeapon);

var input = userInput.toUpperCase();

if (input === 'LIGHTSABER' && computerChoice === 1 || input === 'X-WING' && computerChoice === 2 || input === 'DEATH STAR' && computerChoice === 3) {
  document.write('<h2>It is a tie! Your ' + input + ' was evenly matched against the computers ' + cpuWeapon + '</h2>');
} else if (input === 'LIGHTSABER' && computerChoice === 3 || input === 'DEATH STAR' && computerChoice === 2) {
  document.write('<h2>You Lost! Your ' + input + ' was crushed by the computers ' + cpuWeapon + '</h2>');
} else {
  document.write('<h2>You Won! Your ' + input + ' crushed the computers ' + cpuWeapon + '</h2>')
}

console.log('program end');
