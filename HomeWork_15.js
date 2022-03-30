                                     //***30.3.2022 class number 15***\\             
// Start...


// quetion number 1:

function nums(arr)
{
   let avrg=0 , sum=0;

   for(let x=0 ; x < arr.length ; x++ ) {
       sum+=arr[x]; }
  
   avrg= sum / arr.length;
   return (avrg);
}

console.log(nums([5,4,3,2,1]));
console.log(nums([6,7,8,9,7]));
console.log(nums([8,6,3,5,2,9]));

//------------------------------------------------------------------------------------------------

// quetion number 2:

function min(arr)
{
   let min= arr[0];
    
   for(let x=0 ; x<arr.length ; x++ ){

       if(arr[x]<min) { min=arr[x] }     
   }
             return(min);
}
let  array1=[];
console.log(min([5,6,7,8,9]));
console.log(min([9,8,7,6,5]));
console.log(min([1,7,9,8,0,4]));

//------------------------------------------------------------------------------------------------

// quetion number 3:


function mahrozot(arr)
{
   let long=arr[0].length;
   
   for(let x=0 ; x<arr.length ; x++ ){
       if(arr[x].length>long){
           long=arr[x].length;
       }
   }
   return(long);
}
console.log(mahrozot(["africa","egypt","italy","russian"]));
console.log(mahrozot(["firari","opel","volkswagen","suzuki"]));
console.log(mahrozot(["water","coca-cola","soda","fanta"]));

//------------------------------------------------------------------------------------------------

// quetion number 4:

function mahrozot(arr)
{
   let long=arr[0].length;
   
   for(let x=0 ; x<arr.length ; x++ ){
       if(arr[x].length>long){
           long=arr[x];
       }
   }
   return(long);
}
console.log(mahrozot(["africa","egypt","italy","russian"]));
console.log(mahrozot(["firari","opel","volkswagen","suzuki"]));
console.log(mahrozot(["water","icecream","soda","fanta"]));

//------------------------------------------------------------------------------------------------

// quetion number 5:

function avmax(arr)
{
   let avg ;
   let sum=0 , train=0;

   for(let x=0 ; x<arr.length ;x++){
       sum+=arr[x];
   }

   avg=sum/arr.length;
   for(let z=0 ; z<arr.length; z++ ){
       if(arr[z]>=avg){
           train+=1
       }
   }
   return(train)
}
console.log(avmax([8,8,8,8,8]));
console.log(avmax([7,9,4,8,6]));
console.log(avmax([1,2,7,1,2,2]));

//------------------------------------------------------------------------------------------------

// quetion number 6:

function udin(num) {
    
    let train = 0;
    for (let x=1 ; x<=num ; x++) {
        if (num % x == 0) {
           train+= 1
        }
    }
    if (num == 1) { return (true) };
     if (train == 2) {
        return (true);
    }
    
    else {
        return (false);
    }
}
console.log(udin(47));
console.log(udin(17));
console.log(udin(88));

//------------------------------------------------------------------------------------------------

// quetion number 7:

function udin(num) {
    
    let train = 0;
    for (let x=1 ; x<=num; x++) {
        if (num % x==0) {
            train+=1
        }
    }
    if (num == 1) 
    { return (true) };

     if (train == 2) {
        return (true);
    }
    
    else {
        return (false);
    }
}


function tour(arr){
    train1=0
    for(let x=0 ; x<arr.length ; x++){
       if(udin(arr[x])==true) {
           train1+=1;
       }
    }
    if(train1==arr.length){
        return(true);
    }
    else{
        return(false);
    }
}
console.log(tour([2,3,5,7,11]));
console.log(tour([17,10,15,7]));
console.log(tour([2,8,14,5,3]));


// END. 


// i was helped by murjan home work.
