// Suppose you are given a number and you need to check whether it’s even or odd.
//  How'd you do that?

let number = 22;

switch (true) {

    case (number % 2 == 0):

        console.log('number is even because it doesnot has any remainder');

        break;

    case (number % 2 != 0):

        console.log('number is odd because it has some remainder');

        break;

}