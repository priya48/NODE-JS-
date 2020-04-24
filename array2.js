module.exports.declr=()=>
{

var a=[50,20,30];
return a;
};

module.exports.sum=(crs)=>
{

var total=0;
for (i=0;i<crs.length;i++)
{
	total=total+crs[i];	
}
return total;
};

module.exports.avg=(sm)=>
{

var avg=sm/4;
return avg;
};


module.exports.show=(crs,sm,avg)=>
{
var output =[crs,sm,avg];
return output;
};


