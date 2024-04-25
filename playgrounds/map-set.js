// 1

function unique(arr) {
    let set = new Set(arr);
    return [...set];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// alert( unique(values) );


// 2

function aclean(arr)
{
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join('');
        map.set(sorted, arr[i]);
    }

    return map;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );
// alert( aclean(arr).forEach(el => alert(el)) );