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