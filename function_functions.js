function maths(func){
    func(2,7);
}

var add=function(a,b){
    result=a+b;
    console.log("Result: ", result);
}

var sub=function(a,b){
    result=a-b;
    console.log("Result: ", result);
}

maths(add);
maths(sub);

//-----------------------------------------------------------------------------

function codered(ch){
    if (ch==1){
        var code =function(a,b){
            result = a+b;
            console.log("result: "+ result);
        }
    }
    if (ch==2){
        var code =function(a,b){
            rsult = a-b;
            console.log("result: "+ result);
        }

    }
    return code;

}

var f = codered(2);
f(2,7);

//-----------------------------------------------------------------------------
