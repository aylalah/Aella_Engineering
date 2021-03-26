let arrayProb = (arr, target) => {  
    let results = [];

    for (let i = 0; i < arr.length; i++) { 
        let lastTarget = target - arr[i];    
        let map = {};    

        for (let j = i+1; j < arr.length; j++) { 
            if (map[arr[j]]) { 
                results.push([arr[j], arr[i], map[arr[j]]]);
            } else {
                map[lastTarget-arr[j]] = arr[j];
            }
        } 
    }

    return results;
}

let array1 = [5, 8, 4, -4,7, 9, 6,-4, 8];
let target = 0;

let result = arrayProb(array1, target);

console.log(result)