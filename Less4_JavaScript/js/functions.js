// Function / Methods

// Expression

var add = function(a, b)
{
	console.log('Hello');
	return a+b;

};

console.log(add(1,2));
// Declarations

console.log(multiply(2,2)); //du kan kalde metoden før du har defineret den.
function multiply(a, b)
{
	return a*b;
}


function multiplys(a, b)
{
	var x = arguments[arguments.length-1];
	//samme som var x = arguments[2];

	//if(x && isNaN(x) === false) <- Kigger på om x er et nummer

	if(x)
	{
		return a*b*x;
	}

	return a*b;
}
console.log(multiplys(2,2,4));

// Anonymous Functions
/*function(a,d)
{
	return a+d;
};
*/

function readFile(a, b)
{
	console.log(a);
	b();
}

readFile('test.txt', function()
	{
		console.log('here i write out the content of the textfile:');
	});

(function IIFE()
{
	console.log('i envoked myself');
}());


//Scope
//Lexical or function Scope

var x = function()
{
	var a = 'hello';
	b = 'no no no';
}


