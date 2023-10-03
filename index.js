function receivesAFunction(callback){
  if (typeof callback === 'function'){
    callback();
  }else {
    console.log('The argument is not a function.');
  }
}
function myCallback(){
  console.log('Callback function called!');
}
receivesAFunction(myCallback);


function returnsANamedFunction(){
  function namedFunction(){
    console.log(`This is a named function.`);
  }
  return namedFunction;
}
const myFunction = returnsANamedFunction();
myFunction();


function returnsAnAnonymousFunction(){
  return function(){
    console.log(`This is an anonymous function.`)
  };
}
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();