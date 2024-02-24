function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function Dio(){
    console.log("Kono Dio Da!");
}
}
function returnsAnAnonymousFunction(){
    return ()=> "Yes! Yes! Yes! Yes!";
}