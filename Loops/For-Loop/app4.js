// 4.// Consider you are given an array [2,0,1,6,45,89].
//  You need to find the largest element in the array. 
//  How’d you do that?

let myArray = [2,0,1,6,45,89];

let max = 89;

for( i=0 ; i< myArray.length; i++){

    if(myArray[i] < max){

        console.log(myArray[i] +' is not maximum number');
    }
    else {

        console.log(max +' is maximum number');
    }
}
