$(document).ready(function(){
	var config,
		image = 0,
		transition = 0,
		images,
		imageElem1 = '.image1',
		imageElem2 = '.image2',
		imageDelay,
		imageBool = true,
		randomize = false;

	$.getJSON('config.json')
		.done(done)
		.fail(fail);

	function done(data){
		config = data;
		console.log('Engines are go!!!');
		init();
	}

	function fail(data){
		console.error('There was an error', data);
	}

	function init(){
		$('title').html(config.title || ''); // Set the title
		images = config.files || [];
		imageDelay = config.delayBetweenImages || 10000;
		if(config.randomize !== undefined && config.randomize !== null) { randomize = config.randomize; }
		$(imageElem1).css('height',$(window).height());
		$(imageElem2).css('height',$(window).height());
		$(imageElem1).on('load', showImage);
		$(imageElem2).on('load', showImage);
		setImage();
	}

	function setImage() {
		if(!randomize && image === images.length - 1) { image = 0; }

		if(randomize) {
			image = Math.floor((Math.random() * images.length - 1) + 0);
		}

		if(imageBool === true)
		{
			$(imageElem1).attr('src',images[image]);
			imageBool = false;
		}
		else
		{
			$(imageElem2).attr('src',images[image]);
			imageBool = true;
		}

		if(!randomize) image++;
	}

	function showImage(){
		if(imageBool === true)
		{
			$(imageElem1).fadeOut().promise().done(function(){
				$(imageElem2).fadeIn().delay(imageDelay).promise().done(setImage);
			});
		}
		else
		{
			$(imageElem2).fadeOut().promise().done(function(){
				$(imageElem1).fadeIn().delay(imageDelay).promise().done(setImage);
			});
		}
	}
});