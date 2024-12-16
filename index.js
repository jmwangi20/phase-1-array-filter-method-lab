const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const findMatching = (array,values) => {
//     return array.filter((x)=>x.toUpperCase() + x.substring(1)==values[0].toUpperCase() + values.substring(1)).length;
// }

// function findMatching(array,values){
//     return array.filter((x) => x.toUpperCase() + x.substring(1) == values[0].toUpperCase() + values.substring(1))
// }

function findMatching(drivers,name){
    return drivers.filter(x => x.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers ,name){
    return drivers.filter(x => x[0].toLowerCase() === name[0].toLowerCase())
}


function matchName(filterArrays,names){
    return filterArrays.filter(x => x["name"].toLowerCase() === names.toLowerCase())
  }
  