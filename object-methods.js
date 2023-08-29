const footballTeam = {
    name: 'Falcons',
    city: 'Atlanta'
}

// Retrieve keys
console.log(Object.keys(footballTeam));

// Retrieve values
console.log(Object.values(footballTeam));

// Retrieve keys and values
console.log(Object.entries(footballTeam));

// Copy values from one or more source objects to a target object
const target = { type: 'junior'}
console.log(Object.assign(footballTeam, target));

// Compare two values
console.log(Object.is(footballTeam.name, 'Falcons'));

// Add new property or modify existing ones
console.log(Object.defineProperty(footballTeam, 'stadium', {value: 'Mercedes-Benz Stadium', writable: false}));
console.log(footballTeam.stadium);

// Check if object has a property
console.log(footballTeam.hasOwnProperty('stadium'));

// Protect the object from beeing changed
Object.freeze(footballTeam);
footballTeam.name = 'newName';
console.log(footballTeam); // Array did not change