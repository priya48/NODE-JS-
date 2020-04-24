
module.exports.declr=()=>
{
	var arr=[10,20,30];
	
	var i,sum=0;
	for( i=0;i<=2;i++)
	{
		sum = sum+arr[i];
		console.log(arr[i]);
	}
	return sum;	
};