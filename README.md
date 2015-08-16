# Slideshowy

Want an image slideshow for that special event?

Well look NO further!

By creating just a simple `config.json` settings file, you can have:

* A slideshow that works great both online and offline
* Randomize images or let the slideshow follow a specific order - it's up to you!
* Automatically detects your screen size to fit each image in the best way possible!
* Continues to work well even in poor network situations since the next image is only shown once it is fully loaded
* Works in all browsers, IE6+ (thanks to jQuery 1.x)

# 3 Step Setup

1. Download this repository
2. Dump your images into the `images/` folder
3. Make a `config.json` file inside your repository with the following (self-describing) settings:

```json
{
	"title":"This is my awesome slideshow",
	"randomize":false,
	"delayBetweenImages":10000,
	"files":[
		"images/image1.jpeg",
		"images/image2.jpg",
		"however many you want..."
	]
}
```

That's all! You're ready to fire it up!!!

# Troubleshooting

## Slideshow does not run at all

Check the console using the `F12` developer tools in your browser. It should say `Engines are go!!!` to show everything loaded properly.

If it doesn't then there may be a problem with your config file - make sure its got all the settings it needs!

If it does say `Engines are go!!!` it means the problem most likely lies with your images or the paths of your images in `config.json`

## Slideshow runs fine but some images are missed out or blank. I also see some errors of image files in the F12 developer console

Have you set the `randomize` property in `config.json` to `true`? If so, your slideshow will **not** run in the order you have specified.

It may also be a problem with your array of images defined in your `config.json`. Are you sure all the image paths are correct and those images actually exist in the `images` folder? Double-check everything.

If they do exist, make sure the permissions on the images are all set to `chmod 644` i.e. can be read universally by all programs/users.

## Slideshow runs but stops at some point

Please check the permissions of your image files. On Linux they should all be at least `chmod 644` (or read-write, read, read). A quick command to do that for all the pics in the image folder is `chmod 644 images/*`

# Future Features

* Customizable slide transitions
* Can pause, play, go back or forward slides with keyboard or touch events
* A tool/doctor to autogenerate the list of image files for `config.json` and make sure they have the right permissions (will require php)
* Ability to add in a mixture of media, including videos and audio files