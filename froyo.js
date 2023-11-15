//prompt to enter a list of comma-separated froyo flavors
// example: vanilla,vanilla,vanilla,strawberry,coffee,coffee//
//when reviewing browser console, can observe an object listing how many of each flavor they have ordered. //
let input= prompt("enter list of comma-separated froyo flavors:");
console.log("Froyo Flavors:", input);

//split input into an array of flavors
let inputflavors = input.split(",");
console.log(inputflavors);


//initialize an empty object


function mapOrder(elements){
    const map ={};
    for (let i=0; i<elements.length;i++){
        //if key already exists then add 1 to the value
        if (map[elements[i]]){map[elements[i]]++;
        } else {
            //set new key value pair in map
            map[elements[i]]=1;
        }
    }
    return map;
}

console.log(mapOrder(inputflavors));