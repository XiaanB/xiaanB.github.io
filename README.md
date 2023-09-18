# xiaanB.github.io
First I created the basic websites without any CSS, just the information that I wanted to display.
	ALl the pages had a common nav bar and a common footer with social media icons.
	I got tired of scrolling back to the top of the page,so I added a back to the top button. 
	Initially I found the nav bar and social media code and modified it. Later on I deleted the Nav bar and created my own.
	Home page: Photos of the 2 islands with links to the tours page.
		A form with search options.
		Travel tips, clickable that display an alert with information.
	Tours page: Divided into 3 sections, North, South and Both Islands.
			    Each section provides 2 or 3 tours with some basic information. Each photo is clickable and leads to an external website with more information.
			    I added a user ratings display. I did not create it.
			    Lastly I added thump nails pictures to display some highlights. They also have an alert with the place name.
	About us page: This I put in to have the assignment easily accessible for my reference.
	Contact page: This page has 2 main sections.
					1. Contact us. This has a map link to our physical address and leaves a message form.
					2. Register. This has our address and place where you can register to get regular updates. It asks some basic questions to tayler the suggestions.

	With the basic information loaded I started adding style. I added all the common styles, like Nav bar, footer and back to top button in common.css file

	I discovered that instead of uploading my files to git everyday that I can use the desktop. With that I can work anywhere and the main files are always up to date with a history of the changes for when I needed to rollback a change. I also created a template html file that I used to just add the information to.

	
I have added some functionality with java script and dom manipulation to the forms.
	the search box on the main page will now go to the selected area (North island, South Island or both islands) on the tours page.
	Added a mailchimp button to the contact page register.
	Updated the contact us form.
		First name has to be 5 characters long at leat
		Message has to be 15 characters long.
		Added JavaScript to pop up a message to say thank you and give the minimum that has to be filled in.
