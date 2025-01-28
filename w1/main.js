console.log("Hello from inside the main .js file");

//et myVar = ;

const myVar = "Adan";
const myVarType = typeof(myVar)
console.log ("myVarType" + myVarType);
console.log ('myVarType ${myVarType}');



function runNow () {
    if (myVarType === "number") {
        console.log('will 22 this one run?')
    }else{
        console.log('will 33 this one run?')
    }
}

runNow();
runNow();
