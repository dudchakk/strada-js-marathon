function buildFun(n)
{
	var res = [];

	for (var i = 0; i < n; i++) {
        let j = i;
		res.push(function(){
			return j;
		})
	}
	return res;
}

// console.log(buildFun(10));
// for(var i = 0; i < 10; i++)
//     buildFun(10)[i]();


function getAverage(marks)
{
    return Math.floor(marks.reduce((accumulator, item) => accumulator + item, 0) / marks.length);
}

console.log(getAverage([1,5,87,45,8,8]));