function receivesAFunction(add){
    return add();
}

let namedFunction = function(){}
function  returnsANamedFunction(){
    return namedFunction
}



function returnsAnAnonymousFunction(){
    return function(){}
}