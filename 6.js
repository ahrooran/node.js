function message(){
    console.log('hello');
}

message();


//not a function, needs to return a value
function add(a,b){
    result=a+b;
    console.log('Result is ' + result);
}

add(1,2);

function addition(c,d){
    result=c+d;
    return result;
}

addition(2,4);



function highest(){
    max =0;
    for (i=0; i<=max;i++){
        if (arguments[i]>max) {
            var max=arguments[i];
        }
    }
    
console.log(max);
}

highest(11,3,2,9,1,3,5,8,0);

