# xiaanB.github.io
First I created the basic web sites with out any CSS, just the information that I wanted to display.
	ALl the pages had a common nav bar and a common footer with social media icons.
	I got tired of scrolling back to the top of the page,so added a back to the top button. 
	Initially I found the nav bar and social media code and modify it. Later on I deleted the Nav bar and created my own.
	Home page: Photos of the 2 islands with links to the tours page.
		A form with search options.
		Travel tips, clicable that display an alert with information.
	Tours page: Divided into 3 sections, North, South and Both Islands.
			    Each section provide 2 or 3 tours with some basic information. Each photo is clickable and leads to an external website with more information.
			    I added a user ratings display. I did not create it.
			    Lastly I added phump nails pictures to diplay some highlights. They also has on alert with the place name.
	About us page: This I put in to have the assignment easily accesble for my referance.
	Contact page: This page has 2 main sections.
					1. Contact us. This has a map link to our phisical adress and leave a message form.
					2. Register. This has our adress and place where you can register to get regular updates. It ask some basic questions to tayler the suggestions.

	With the basic information loaded I started adding style. I added all the common styles, like Nav bar, footer and back to top button in common.ccs file

	I discover that instead of uploading my files to git everyday that I can use desktop get. With that I can work anywhere and the main files are allways up to date with a history of the changed for when I needed to rollback a change. I also created a template html file that I used to just add the information to.

	
I have added some funtionality with java script and dom manipilation to the forms.
	search box on the main page will now go to the selected area (Nort island, South Island or both islands) on the tours page.
	Added a mailchimp button to the contact page register.
	Updated the contact us form.
		First name has to be 5 characters long at leat
		Message has to 15 characters long.
		Added JavaScript to pop up a message to say thank you are give the minimum that has to filled in.