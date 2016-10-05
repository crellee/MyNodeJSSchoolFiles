/*importerer bibliotektet filesystem(fs)*/
var fs = require('fs');
var colors = require('colors');


var questions = [
	'Name',
	'Version',
	'Description',
	'Entry Point',
	'Author',
	'License'
];

var answers = {};


function ask(i) {

   	process.stdout.write(questions[i].red);
	process.stdout.write(' > '.blue);
};

process.stdin.on('data', function(data)
{	
	answers[questions[Object.keys(answers).length]] = data.toString().trim();

	if(Object.keys(answers).length < questions.length)
	{
	ask(Object.keys(answers).length);
	}
	else
	{
		process.exit();

		

	}
});
process.on('exit', function()
{
	console.log(JSON.stringify(answers, null, 4).rainbow);
	console.log('json has been saved. Bye'.rainbow);
	fs.writeFileSync('./package.json', JSON.stringify(answers, null, 4) , 'utf-8');	
	
	/*fs.writefile('package.json', 'Hello World', function(err){
		process.exit();
	})
	*/	



});


ask(0);
