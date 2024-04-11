import data from "./data.json" assert { type: "json" };
// console.log(data);

// data_obj = JSON.parse(data);
// console.log(data_obj.users[0].firstName);

// console.log(data.users[0].firstName);

// let json = JSON.stringify(data, function replacer(key, value) {
    
//     if(key == 'knowsAs') return 1;
//     // if(key == "users")
//     // {
//     //     for(let i = 0; i < key.length; i++) {
//     //         return value[i].firstName + " " + value[i].lastName;
//     //     }
//     // }
// });

let json = JSON.stringify(data, function replacer(key, value) { 
    if(key == 'users') {
        let to_return = '';
        for(let i = 0; i < value.length; i++)
            to_return += value[i].firstName + " " + value[i].lastName + "\n";
        return to_return;
    }
    else return value; 
});

let new_data = JSON.parse(json, function reviver(key, value) {
    if(key == 'users') {
        return value.slice(0, 1);
    }
    else return value;
})

console.log(new_data);