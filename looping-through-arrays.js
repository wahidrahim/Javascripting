var pets = ['cat', 'dog', 'rat']

// didn't even use a for-loop :P
pets = pets.map(function(pet) { return pet += 's' })

console.log(pets)
