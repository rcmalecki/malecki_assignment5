//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var user = window.prompt ('What is your name?');

if (user != "") {
	result = 'Hi ' + user;
	console.log(result);
} else {
	result = 'Ok, I\'ll just call you User.';
	console.log(result);
}		
	
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
	var favAuthor = window.prompt ('What is your favorite author?');
	switch (favAuthor) {
		case speechesArray[0].author:
		console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
		break;
		case speechesArray[1].author:
		console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
		break;
		case speechesArray[2].author:
		console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
		break;
		default:
		console.log("Sorry. Author not found.");
		break;
	} 
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
	console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
	console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.');
	if (speechesArray[0].yearIsBCE) {
	  console.log('This speech took place before the common era.');
	} else {
	  console.log('This speech took place during the common era.');
	};
	if (speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
		console.log('This is the most recent speech on the page.');
	}; 
	if (speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
		console.log('This is the oldest speech on the page.');
	};
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
	console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.');
	if (speechesArray[1].yearIsBCE) {
	  console.log('This speech took place before the common era.');
	} else {
	  console.log('This speech took place during the common era.');
	};
	if (speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
		console.log('This is the most recent speech on the page.');
	}; 
	if (speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
		console.log('This is the oldest speech on the page.');
	};
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
	console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
	console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.');
	if (speechesArray[2].yearIsBCE) {
	  console.log('This speech took place before the common era.');
	} else {
	  console.log('This speech took place during the common era.');
	};
	if (speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
		console.log('This is the most recent speech on the page.');
	}; 
	if (speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
		console.log('This is the oldest speech on the page.');
	};
});