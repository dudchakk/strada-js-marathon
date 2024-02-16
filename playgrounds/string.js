// 

function checkSpam(str)
{
    let newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
}

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


/*
- if length > maxlen:
    return str.slice(0, maxlen - 1) + "…"
*/

function truncate(str, maxLength)
{
    return (str.length > maxLength) ? str.slice(0, maxLength - 1) + "…" : str;
}

// console.log(truncate("Що я хотів би розповісти на цю тему:", 20));


/*
slice(1)
+
*/

function extractCurrencyValue(str)
{
    return +str.slice(1);
}

// console.log(extractCurrencyValue('$120') === 120);


/*
for of
new str, += \n
*/

function showVerticalMessage(str)
{
    let strToWork = '';
    if(str[0] == "м") strToWork = str[0].toUpperCase() + str.slice(1);
    if(strToWork.length > 10) strToWork = strToWork.slice(0, 10);
    
    let strToReturn = '';
    for(let char of strToWork)
    {
        strToReturn += char + "\n";
    }
    return strToReturn;
}

console.log(showVerticalMessage("марарарарараррарар"));