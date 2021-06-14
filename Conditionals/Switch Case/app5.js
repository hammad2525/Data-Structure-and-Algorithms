// You need to write a function that prints out ‘wild animals’
//  if the names of lion and leopard are passed to it.
//   However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
// However, if I pass any other name to it, it says ‘unknown’


function print(animal) {

    switch (true) {

        case (animal == 'lion' || animal == 'leopard'):

            console.log('wild animals');
            break;


        case (animal == 'cats' || animal == 'rabbits'):

            console.log('pet animals');
            break;

        case (animal == 'donkey' || animal == 'monkey'):

            console.log('unknown');
            break;

        default:
            break;
    }
}

print('cats');
print('lion');

