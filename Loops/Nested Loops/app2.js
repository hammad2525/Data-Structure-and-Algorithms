// Suppose you’re given an array of animals [[‘cat’, ‘rabbit’],
//  [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].
//   Now, when you encounter ‘car or ‘rabbit’ inside a nested loop,
//    print ‘pet animals’ in the console. Also, if you encounter ‘pigeon’ or ‘parrot’, 
//    print ‘pet birds’.
// Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’

let animals = [

    ['cat', 'rabbit'],
    ['pigeon', 'parrot'],
    ['goldfish', 'whale']

];

for (let i = 0; i < animals.length; i++) {

    for (let j = 0; j < animals[i].length; j++) {

        if (animals[i][j] == 'cat' && 'rabbit') {

            console.log('pet animals');
        }

        else if (animals[i][j] == 'pigeon' && 'parrot') {

            console.log('pet birds');

        }
        else if (animals[i][j] == 'goldfish' && 'whale') {

            console.log('fish');
        }



    }
}
