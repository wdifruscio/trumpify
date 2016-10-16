//object storing text message options
var textLate = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'sry i was l8 4',
	body2: 'not my fault was',
	trumpify: [ 'cuz of isis', 'busy stoppin isis', 'busy buildin 🇲🇽 wall', 'cuz of obama', 'cuz of democrats', 'busy being audited', 'cuz of crooked Hillary', 'cuz making 🇺🇸 gr8 again', 'cuz of all the r8pists n ☠️', 'busy grabbing 🐱', 'busy evading taxes', 'busy thinkin bout d8ting my daughter', 'busy inventing a fake uni'],
}

var textSupposedTo = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'i kno i was sposed to',
	body2: 'but i couldnt cuz',
	trumpify: [ 'of isis', 'i was busy stoppin isis', 'i was busy buildin 🇲🇽 wall', 'of obama', 'of democrats', 'i was busy being audited', 'of crooked Hillary', 'i was making 🇺🇸 gr8 again', 'of all the r8pists n ☠️', 'i was busy grabbing 🐱', 'i was busy evading taxes', 'i was busy thinkin bout d8ting my daughter', 'i was busy inventing a fake uni']
}

var textWrong = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'i kno i shouldnt have',
	body2: 'but u cant blame me cuz',
	trumpify: ['isis', 'the mexicans', 'obama', 'hillary', 'the democrats', 'the muslims'],
	body3: 'made me do it'
}

var textDontWantTo = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'sry but i cant',
	body2: 'cuz',
	trumpify: [ 'of isis', 'i was busy [stop emoji] isis', 'i was busy buildin 🇲🇽 wall', 'of obama', 'of democrats', 'i was busy being audited', 'of crooked Hillary', 'i was making 🇺🇸 gr8 again', 'of all the r8pists n ☠️', 'i was busy grabbing 🐱', 'i was busy evading taxes', 'i was busy thinkin bout d8ting my daughter', 'i was busy inventing a fake uni']
}

var textDontAttend = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'sry i cant come 2',
	body2: 'but i gotta',
	trumpify: ['stop isis', 'build the 🇲🇽 wall', 'make 🇺🇸 great again', 'stop obama', 'stop hillary', 'avoid paying my taxes', 'think about d8 my daughter', 'grab 🐱', 'invent a fake uni', 'stop the democrats'],
	body3: 'tonight'
}

var textForgot = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'sry i forgot',
	body2: 'i know ur mad but u should really be mad at',
	trumpify: ['isis', 'obama', 'hillary', 'the 🇲🇽', 'the muslims', 'the democrats']
}

var textSaid = {
	intro: ['sup', 'hey', 'yo'],
	body1: 'sry i said',
	body2: 'but its not my fault cuz',
	trumpify: ['isis', 'obama', 'hillary', 'the 🇲🇽', 'the muslims', 'the democrats'],
	body3: 'made me say it'
}

//Object storing email options
var emailLate = {
	intro: 'Dear',
	body1: 'I\'m sorry I was late for',
	body2: 'But it really wasn\'t my fault—',
	trumpify: [ 'it was because of isis', 'I was busy stopping Isis', 'I was busy building the Mexican wall', 'it was because of Obama', 'it was because of the Democrats', 'I was busy being audited', 'it was because of crooked Hillary', 'I was Making America Great Again', 'I was busy grabbing pussy', 'I was busy evading taxes', 'I was busy thinking about dating my daughter', 'I was busy inventing a fake university', 'all the women were flirting with me'],
	body3: 'Sincerely,'
}

var emailSupposedTo = {
	intro: 'Dear',
	body1: 'I know I was supposed to',
	body2: 'but I couldn\'t because',
	trumpify: [ 'of Isis', 'I was busy stopping Isis', 'I was busy building the Mexican wall', 'of Obama', 'of the Democrats', 'I was being audited', 'of crooked Hillary', 'I was Making America Great Again', 'I was busy grabbing pussy', 'I was busy evading taxes', 'I was busy thinking about dating my daughter', 'I was busy inventing a fake University', 'all the women were flirting with me'],
	body3: 'Sincerely,'
}

var emailWrong = {
	intro: 'Dear',
	body1: 'I know I shouldn\'t have',
	body2: 'but you can\'t blame me because',
	trumpify: ['Isis', 'the Mexicans', 'Obama', 'Hillary', 'the Democrats', 'the Muslims', 'the flirting ladies'],
	body3: 'made me do it.',
	body4: 'Sincerely,'
}

var emailDontWantTo = {
	intro: 'Dear',
	body1: 'Sorry, but I can\'t',
	body2: 'because',
	trumpify: ['of Isis', 'I\’m busy stopping Isis', 'I\'m busy building the Mexican wall', 'of Obama', 'of the Democrats', 'I\'m busy being audited', 'of crooked Hillary', 'I\'m busy Making America Great Again', 'I\'m busy grabbing pussy', 'I\’m busy evading taxes', 'I\’m busy thinking about dating my daughter', 'I\’m busy inventing a fake University', 'all the women are flirting with me'],
	body3: 'Sincerely,'
}

var emailDontAttend = {
	intro: 'Dear',
	body1: 'Sorry I can\’t come to',
	body2: 'but I have to',
	trumpify: ['stop Isis', 'build the Mexican wall', 'Make America Great Again', 'stop Obama', 'stop Hillary', 'avoid paying my taxes', 'think about dating my daughter', 'grab pussy', 'invent a fake University', 'stop the Democrats'],
	body3: 'tonight.',
	body4: 'Sincerely,'
}

var emailForgot = {
	intro: 'Dear',
	body1: 'Sorry I forgot',
	body2: 'I know you\’re mad, but you should really be mad at',
	trumpify: ['Isis', 'Obama', 'Hillary', 'the Mexicans', 'the Muslims', 'the Democrats', 'the flirty ladies'],
	body3: 'Sincerely,'
}

var emailSaid = {
	intro: 'Dear',
	body1: 'Sorry I said',
	body2: 'but it\’s really not my fault—',
	trumpify: ['Isis', 'Obama', 'Hillary', 'the Mexicans', 'the Muslims', 'the Democrats', 'the flirty ladies'],
	body3: 'made me say it.',
	body4: 'Sincerely,'
}

//Object storing Haiku options
var haikuLate = {
	intro: 'dear',
	body1: 'late for',
	body2: 'fault is not mine,  was busy',
	trumpify: ['stopping Isis', 'building Mexican wall', 'being audited', 'Making America Great Again', 'grabbing pussy', 'evading taxes'],
	body3: 'by'
}

var haikuSupposedTo = {
	intro: 'dear',
	body1: 'could not though supposed to',
	body2: 'blame',
	trumpify: [ 'Isis', 'Obama', 'Hillary', 'the Mexicans', 'the Democrats', 'the flirty ladies'],
	body3: 'by'
}

var haikuWrong = {
	intro: 'dear',
	body1: 'did, but should not have',
	trumpify: ['Isis', 'the Mexicans', 'Obama', 'Hillary', 'the Democrats', 'the Muslims', 'the flirty ladies'],
	body2: 'made me',
	body3: 'by'
}

var haikuDontWantTo = {
	intro: 'dear',
	body1: 'apologies, I',
	body2: 'can\’t',
	body3: 'because of',
	trumpify: ['Isis', 'the Mexicans', 'Obama', 'Hillary', 'the Democrats', 'the Muslims', 'the flirty ladies'],
	body4: 'by'
}

var haikuDontAttend = {
	intro: 'dear',
	body1: 'unable to attend',
	body2: 'with regrets',
	body3: 'must',
	trumpify: ['stop Isis', 'build the Mexican wall', 'Make America Great Again', 'stop Obama', 'stop Hillary', 'avoid paying my taxes', 'think about dating my daughter', 'grab pussy', 'stop the Democrats'],
	body4: 'instead.',
	body5: 'by'
}

var haikuForgot = {
	intro: 'dear',
	body1: 'sorry I forgot',
	body2: ' be mad',
	body3: 'at',
	trumpify: ['Isis', 'Obama', 'Hillary', 'the Mexicans', 'the Muslims', 'the Democrats', 'the flirty ladies'],
	body4: 'not me',
	body5: 'by'
}

var haikuSaid = {
	intro: 'dear',
	body1: 'sorry I said',
	trumpify: ['Isis', 'Obama', 'Hillary', 'the Mexicans', 'the Muslims', 'the Democrats', 'the flirty ladies'],
	body2: 'made me',
	body3: 'by'
}

//User can select copy, tweet, and/or start over buttons
	//Copy button copies to clipboard
	//Tweet button opens new window twitter (click to tweet)
	//Start over button refreshes page

$(function(){ //this is doc ready

	//User selects one of four situation radio buttons
	//Store value 
	//Then use value to display next section (pickle)
	$('input[name=individualSituation]').on('click', function(){ //function start
		$('fieldset .wrapper ul').css('display', 'flex');
		
	//Add red background to selected label
		var id = $(this).attr('id');
		$('.selectLabelSituation').removeClass('redBackground');
		$('label[for=' + id + ']').toggleClass('redBackground');


		//scroll to Pickle section when click on radio buttons in Situation section
			setTimeout(function() { 
				window.location.href='#pickle'; 
			}, 
				30);

		var individualSituation = $('input[name=individualSituation]:checked').val();
		$('.pickle').show();

		$('.pickle ul').hide();

		if(individualSituation === 'work' || individualSituation === 'school'){
			$('.workPickles').fadeIn();
		}

		if(individualSituation === 'social'){
			$('.socialPickles').fadeIn();
		}

		if(individualSituation === 'relationship'){
			$('.relationshipPickles').fadeIn();
		}

	}); //situation click function end

	//User selects one of four pickle radio buttons
	//Store value
	//Displays userInput section

	var inputReasonLateP = 'Sorry I was late for';
	var inputReasonLateLabel = '(what you were late for)';

	var inputReasonSupposedToP = 'I know I was supposed to';
	var inputReasonSupposedToLabel = '(what you were supposed to do)';

	var inputReasonWrongP= 'I know I shouldn\'t have';
	var inputReasonWrongLabel = '(what you did wrong)';

	var inputReasonDontWantToP = 'I really don\'t want to';
	var inputReasonDontWantToLabel = '(what you don\'t want to do)';

	var inputReasonDontAttendP = 'I really don\'t want to attend';
	var inputReasonDontAttendLabel = '(what you don\'t want to attend)';

	var inputReasonForgotP = 'I\'m sorry I forgot';
	var inputReasonForgotLabel ='(what you forgot)';

	var inputReasonSaidP = 'I\'m sorry I said';
	var inputReasonSaidLabel ='(what you shouldn\'t have said)';

	$('input[name=individualPickle]').on('click', function(){ //function start

		//scroll to userInput section when click on radio buttons in Pickle section
			setTimeout(function(){
				window.location.href='#userInput';
			},
				30);

		//Add red background to selected label
			var id = $(this).attr('id');
			$('.selectLabelPickle').removeClass('blueBackground');
			$('label[for=' + id + ']').toggleClass('blueBackground');

		individualPickle = $('input[name=individualPickle]:checked').val();
		$('.userInput').fadeIn();
		$('.outputFormat').show();
		
		//displays userInput for Work / School
		if(individualPickle === 'workLate'){
			$('#inputReasonP').html(inputReasonLateP);
			$('#inputReasonLabel').html(inputReasonLateLabel);
		} 

		if(individualPickle === 'workSupposedTo'){
			$('#inputReasonP').html(inputReasonSupposedToP);
			$('#inputReasonLabel').html(inputReasonSupposedToLabel);
		} 

		if(individualPickle === 'workWrong'){
			$('#inputReasonP').html(inputReasonWrongP);
			$('#inputReasonLabel').html(inputReasonWrongLabel);
		} 

		if(individualPickle === 'workDontWantTo'){
			$('#inputReasonP').html(inputReasonDontWantToP);
			$('#inputReasonLabel').html(inputReasonDontWantToLabel);
		}

		//displays UserInput for Social

		if(individualPickle === 'socialLate'){
			$('#inputReasonP').html(inputReasonLateP);
			$('#inputReasonLabel').html(inputReasonLateLabel);
		} 

		if(individualPickle === 'socialWrong'){
			$('#inputReasonP').html(inputReasonWrongP);
			$('#inputReasonLabel').html(inputReasonWrongLabel);
		} 

		if(individualPickle === 'socialDontWantTo'){
			$('#inputReasonP').html(inputReasonDontWantToP);
			$('#inputReasonLabel').html(inputReasonDontWantToLabel);
		}

		if(individualPickle === 'socialDontAttend'){
			$('#inputReasonP').html(inputReasonDontAttendP);
			$('#inputReasonLabel').html(inputReasonDontAttendLabel);
		} 

		//displays userInput for Relationship

		if(individualPickle === 'relationshipForgot'){
			$('#inputReasonP').html(inputReasonForgotP);
			$('#inputReasonLabel').html(inputReasonForgotLabel);
		} 

		if(individualPickle === 'relationshipWrong'){
			$('#inputReasonP').html(inputReasonWrongP);
			$('#inputReasonLabel').html(inputReasonWrongLabel);
		}  

		if(individualPickle === 'relationshipDontWantTo'){
			$('#inputReasonP').html(inputReasonDontWantToP);
			$('#inputReasonLabel').html(inputReasonDontWantToLabel);
		}

		if(individualPickle === 'relationshipSaid'){
			$('#inputReasonP').html(inputReasonSaidP);
			$('#inputReasonLabel').html(inputReasonSaidLabel);
		}
	}); // pickle click function end

	$('input[name=outputType]').on('click', function(){
		//Add red background to selected label
			var id = $(this).attr('id');
			console.log($('label[for=' + id + ']'));
		$('.selectLabelOutput').removeClass('redBackground');
		$('label[for=' + id + ']').addClass('redBackground');
		
	});
//user click "Trumpify" (submit)
	$('form').on('submit', function(e){   //submit function
		e.preventDefault();
		//variables for form inputs
		//Store value of name, reason, and yourName
		var name = $('#name').val();
		var inputReason = $('input[name=inputReason]').val();
		var yourName = $('input[name=yourName]').val();
		//function to make a random integer based on length of array
		var randomTrumpify = function(arr) {
			var rando = Math.floor(Math.random() * arr.length);
			return arr[rando]
		};

	//Text Message output -- this concats the output.
		var textLateOutput = (`${randomTrumpify(textLate.intro)} ${name} ${textLate.body1} ${inputReason}. ${textLate.body2} ${randomTrumpify(textLate.trumpify)} - ${yourName} (& Donald)`);

		var textSupposedToOutput = (`${randomTrumpify(textSupposedTo.intro)} ${name} ${textSupposedTo.body1} ${inputReason} ${textSupposedTo.body2} ${randomTrumpify(textSupposedTo.trumpify)} - ${yourName} (& Donald)`);

		var textWrongOutput = (`${randomTrumpify(textWrong.intro)} ${name} ${textWrong.body1} ${inputReason} ${textWrong.body2} ${randomTrumpify(textWrong.trumpify)} ${textWrong.body3} - ${yourName} (& Donald)`);

		var textDontWantToOutput = (`${randomTrumpify(textDontWantTo.intro)} ${name} ${textDontWantTo.body1} ${inputReason} ${textDontWantTo.body2} ${randomTrumpify(textDontWantTo.trumpify)} - ${yourName} (& Donald)`);

		var textDontAttendOutput = (`${randomTrumpify(textDontAttend.intro)} ${name} ${textDontAttend.body1} ${inputReason} ${textDontAttend.body2} ${randomTrumpify(textDontAttend.trumpify)} ${textDontAttend.body3} - ${yourName} (& Donald)`);

		var textForgotOutput = (`${randomTrumpify(textForgot.intro)} ${name} ${textForgot.body1} ${inputReason}. ${textForgot.body2} ${randomTrumpify(textForgot.trumpify)} and ${randomTrumpify(textForgot.trumpify)} - ${yourName} (& Donald)`);

		var textSaidOutput = (`${randomTrumpify(textSaid.intro)} ${name} ${textSaid.body1} ${inputReason} ${textSaid.body2} ${randomTrumpify(textSaid.trumpify)} ${textSaid.body3} - ${yourName} (& Donald)`);

	//Email Message output -- this concats the output.

		var emailLateOutput = (`${emailLate.intro} ${name}, <br> ${emailLate.body1} ${inputReason}. ${emailLate.body2} ${randomTrumpify(emailLate.trumpify)} <br> ${emailLate.body3} ${yourName} (& Donald) `);

		var emailSupposedToOutput = (`${emailSupposedTo.intro} ${name}, <br> ${emailSupposedTo.body1} ${inputReason} ${emailSupposedTo.body2} ${randomTrumpify(emailSupposedTo.trumpify)} <br> ${emailSupposedTo.body3} ${yourName} (& Donald) `);

		var emailWrongOutput = (`${emailWrong.intro} ${name}, <br> ${emailWrong.body1} ${inputReason} ${emailWrong.body2} ${randomTrumpify(emailWrong.trumpify)} ${emailWrong.body3} <br> ${emailWrong.body4} ${yourName} (& Donald) `);

		var emailDontWantToOutput = (`${emailDontWantTo.intro} ${name}, <br> ${emailDontWantTo.body1} ${inputReason} ${emailDontWantTo.body2} ${randomTrumpify(emailDontWantTo.trumpify)} <br> ${emailDontWantTo.body3} ${yourName} (& Donald)`);

		var emailDontAttendOutput = (`${emailDontAttend.intro} ${name}, <br> ${emailDontAttend.body1} ${inputReason} ${emailDontAttend.body2} ${randomTrumpify(emailDontAttend.trumpify)} ${emailDontAttend.body3} <br> ${emailDontAttend.body4} ${yourName} (& Donald)`);

		var emailForgotOutput = (`${emailForgot.intro} ${name}, <br> ${emailForgot.body1} ${inputReason}. ${emailForgot.body2} ${randomTrumpify(emailForgot.trumpify)} and ${randomTrumpify(emailForgot.trumpify)} <br> ${emailForgot.body3} ${yourName} (& Donald)`);

		var emailSaidOutput = (`${emailSaid.intro} ${name}, <br> ${emailSaid.body1} ${inputReason} ${emailSaid.body2} ${randomTrumpify(emailSaid.trumpify)} ${emailSaid.body3} <br> ${emailSaid.body4} ${yourName} (& Donald)`);


		//These are for haiku outputs
		var haikuLateOutput = (`${haikuLate.intro} ${name} <br> ${haikuLate.body1} ${inputReason}, <br> ${haikuLate.body2} <br> ${randomTrumpify(haikuLate.trumpify)} <br> ${haikuLate.body3} ${yourName} (& Donald)`);

		var haikuSupposedToOutput = (`${haikuSupposedTo.intro} ${name} <br> ${inputReason} <br> ${haikuSupposedTo.body1} <br> ${haikuSupposedTo.body2} ${randomTrumpify(haikuSupposedTo.trumpify)} <br> ${haikuSupposedTo.body3} ${yourName} (& Donald)`);

		var haikuWrongOutput = (`${haikuWrong.intro} ${name}, <br> ${haikuWrong.body1} <br> ${inputReason}  <br> ${randomTrumpify(haikuWrong.trumpify)} ${haikuWrong.body2} <br> ${haikuWrong.body3} ${yourName} (& Donald)`);

		var haikuDontWantToOutput = (`${haikuDontWantTo.intro} ${name} <br> ${haikuDontWantTo.body1} <br> ${haikuDontWantTo.body2} ${inputReason} <br> ${haikuDontWantTo.body3} ${randomTrumpify(haikuDontWantTo.trumpify)} <br> ${haikuDontWantTo.body4} ${yourName} (& Donald)`);

		var haikuDontAttendOutput = (`${haikuDontAttend.intro} ${name} <br> ${haikuDontAttend.body1} <br> ${inputReason}, ${haikuDontAttend.body2} <br> ${haikuDontAttend.body3} ${randomTrumpify(haikuDontAttend.trumpify)} ${haikuDontAttend.body4} <br> ${haikuDontAttend.body5} ${yourName} (& Donald)`);

		var haikuForgotOutput = (`${haikuForgot.intro} ${name} <br> ${haikuForgot.body1} <br> ${inputReason}, ${haikuForgot.body2} <br> ${haikuForgot.body3} ${randomTrumpify(haikuForgot.trumpify)}, ${haikuForgot.body4} <br> ${haikuForgot.body5} ${yourName} (& Donald)`);

		var haikuSaidOutput = (`${haikuSaid.intro} ${name} <br> ${haikuSaid.body1} <br> ${inputReason} <br> ${randomTrumpify(haikuSaid.trumpify)} ${haikuSaid.body2} <br> ${haikuSaid.body3} ${yourName} (& Donald)`);


		var outputFormat = $('input[name=outputType]:checked').val();


		
		// REMOVE FIELDSET AND FADE IN OUTPUT. (removing fieldset is to prevent users from clicking multiple submits)
		$('fieldset').fadeOut();
		$('.introText').fadeOut();
		$('header').fadeOut();
		$('.output').fadeIn();
		$('.links').fadeIn();
		//Output appears based on outputType value
		console.log("Correct");

	//these are for work & school - textMessage
		if(outputFormat === 'textMessage' && individualPickle === 'workLate'){ 
			$('.output').prepend("<div class='outputMessage'>"+textLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'workSupposedTo'){
			$('.output').prepend("<div class='outputMessage'>"+textSupposedToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'workWrong'){
			$('.output').prepend("<div class='outputMessage'>"+textWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'workDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+textDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

	//these are for social -textMessage
		if(outputFormat === 'textMessage' && individualPickle === 'socialLate'){
			$('.output').prepend("<div class='outputMessage'>"+textLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'socialWrong'){
			$('.output').prepend("<div class='outputMessage'>"+textWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'socialDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+textDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'socialDontAttend'){	
			$('.output').prepend("<div class='outputMessage'>"+textDontAttendOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

	//these are for relationships -textMessage
		if(outputFormat === 'textMessage' && individualPickle === 'relationshipForgot'){
			$('.output').prepend("<div class='outputMessage'>"+textForgotOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'relationshipWrong'){	
			$('.output').prepend("<div class='outputMessage'>"+textWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'relationshipDontWantTo'){	
			$('.output').prepend("<div class='outputMessage'>"+textDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'textMessage' && individualPickle === 'relationshipSaid'){	
			$('.output').prepend("<div class='outputMessage'>"+textSaidOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		
		//these are for Work & school - email
		if(outputFormat === 'emailMessage' && individualPickle === 'workLate'){
			$('.output').prepend("<div class='outputMessage'>"+emailLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'workSupposedTo'){
			$('.output').prepend("<div class='outputMessage'>"+emailSupposedToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'workWrong'){
			$('.output').prepend("<div class='outputMessage'>"+emailWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'workDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+emailDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		//these are for Social - email
		if(outputFormat === 'emailMessage' && individualPickle === 'socialLate'){
			$('.output').prepend("<div class='outputMessage'>"+emailLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'socialWrong'){
			$('.output').prepend("<div class='outputMessage'>"+emailWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'socialDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+emailDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'socialDontAttend'){
			$('.output').prepend("<div class='outputMessage'>"+emailDontAttendOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		//these are for Relationship - email
		if(outputFormat === 'emailMessage' && individualPickle === 'relationshipForgot'){
			$('.output').prepend("<div class='outputMessage'>"+emailForgotOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'relationshipWrong'){
			$('.output').prepend("<div class='outputMessage'>"+emailWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'relationshipDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+emailDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'emailMessage' && individualPickle === 'relationshipSaid'){
			$('.output').prepend("<div class='outputMessage'>"+emailSaidOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}


		//these are for work - haiku
		if(outputFormat === 'haiku' && individualPickle === 'workLate'){
			$('.output').prepend("<div class='outputMessage'>"+haikuLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'workSupposedTo'){
			$('.output').prepend("<div class='outputMessage'>"+haikuSupposedToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'workWrong'){
			$('.output').prepend("<div class='outputMessage'>"+haikuWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'workDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+haikuDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		//these are for Social - haiku
		if(outputFormat === 'haiku' && individualPickle === 'socialLate'){
			$('.output').prepend("<div class='outputMessage'>"+haikuLateOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'socialWrong'){
			$('.output').prepend("<div class='outputMessage'>"+haikuWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'socialDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+haikuDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'socialDontAttend'){
			$('.output').prepend("<div class='outputMessage'>"+haikuDontAttendOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		//these are for Relationship - haiku
		if(outputFormat === 'haiku' && individualPickle === 'relationshipForgot'){
			$('.output').prepend("<div class='outputMessage'>"+haikuForgotOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'relationshipWrong'){
			$('.output').prepend("<div class='outputMessage'>"+haikuWrongOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'relationshipDontWantTo'){
			$('.output').prepend("<div class='outputMessage'>"+haikuDontWantToOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}

		if(outputFormat === 'haiku' && individualPickle === 'relationshipSaid'){
			$('.output').prepend("<div class='outputMessage'>"+haikuSaidOutput);
			$('.output').prepend("<div><h2>"+"Heres your excuse!");
		}
		
	}); //end of submit function
}); //this ends doc ready

//scroll to Situation section when click on Let's Get Started
function scrollToSituation(){
	$('#situation').show();
		setTimeout(function(){
		window.location.href='#situation';
	},
		30);
}

$('a').smoothScroll({
		offset: 0,
		speed: 250
	});






