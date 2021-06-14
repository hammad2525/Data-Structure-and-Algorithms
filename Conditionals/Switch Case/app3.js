// Suppose a situation in which you are expected to show ‘less than 10’
//  if a number is less than 10. 
// However, if it’s greater than 10, print ‘greater than 10’.
//  Also, deal with the case in which it’s equal to 10 with an appropriate message.

let number = 16;

switch (true) {

    case (number < 10):
        console.log("number is less then 10");
        break;

    case (number > 10):
         console.log("number is greater then 10");
        break;

    case (number == 10):
         console.log("number is equal to 10");
        break;


    default:
        break;
}