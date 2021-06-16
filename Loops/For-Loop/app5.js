// 5.// Consider you are given an array [2,0,1,6,45,89].
// You need to find the largest element in the array.
//  How’d you do that?

let myArray = [2,0,1,6,45,89];

let min = 0 ;

for( i = 0 ; i < myArray.length ; i++){

    if ( myArray[i] > min){

        console.log( myArray[i] + ' is not minimum value');
    }

    else{

        console.log(min + ' is minimum value');

    }
}
