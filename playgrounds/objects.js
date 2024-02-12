// 2

function isEmpty(obj)
{
    for (let prop in obj)
    {
        // if(prop in obj)
        // {
            return false;
        // }
    }
    return true;
}

// 3

function sumObjValues(obj)
{
    let sum = 0;
    for (let key in obj)
    {
        sum += obj[key];
    }
    return sum;
}

// 4

function multiplyNumeric(obj)
{
    for (let key in obj)
    {
        if(typeof obj[key] == "number")
        {
            obj[key] *= 2;
        }
    }
}


// 

let calculator = {
    read() {
        this.a = +prompt("Enter a:", 0);
        this.b = +prompt("Enter b:", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
}