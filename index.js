
function receivesAFunction(callback){
    callback;
    const spy = chai.spy();
    const chai = require("chai");

      receivesAFunction(spy);
     

}
function ourCallBack(){
    return "hey you"
}
receivesAFunction(ourCallBack);
function returnsANamedFunction(){
    return function namesd(){
        console.log('Am a named function!');
    }
}
function returnsAnAnonymousFunction(){
    return function(){}
}



