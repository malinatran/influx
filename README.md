### IN/FLUX

:rocket: everythingisinflux.herokuapp.com

Web app that bridges data and storytelling to empower users to share their own stories and discover others' stories. 

##### Technologies used:
- Express/Node.js
- Handlebars
- Highcharts JS
- Amazon Web Services S3
- Google Maps API
- Google Places API

##### General approach:
Captivated by data visualization, I initially wanted to create a web platform that showcases immigration patterns around the world.
The challenge was find a comprehensive dataset and learning to use D3. Given time constraints, I decided to focus on U.S Census Data
that would provide information on the demographics of Americans and used a library, Highcharts, to display this information in
an appealing way. I also wanted the user to have some kind of engagement and decided to adopt Humans of New York's approach to storytelling. 
(There is a relatively high level of anonymity and intimacy between the reader and the photographed individual). I enjoyed
conceptualizing this app – which, at first glance, seems to be unrelated. However, I think I was able to tie it together. 
Essentially, the story of America is one of diversity and changes; I underscore that with the data, and further reinforce it
through the users' stories. There is also an element of discovery to this app.

My overall approach was to take the basic elements of a CRUD app and refine it through a clean UX design and robust app. 
I gave myself more back-end experience by challenging myself to use Handlebars on the server side and avoiding building a 
single-app page. I was thorough in my code: when using AWS, rather than use XML, I challenged myself to rewrite their 
instructions using Ajax. I'm proud that I was able to hack things; whether it was Highcharts' graphs or Bootstrap, I learned
to customize frameworks and libraries. I also focused on crafting the smallest details, which may go unnoticed in retrospect,
but was really an opportunity for me to code and design with care.

##### Installation instructions:
None, unless running app locally which would require `npm install`.

##### User stories:
- User can view data carousel and map of stories without being logged in.
- User can sign up and login to app.
- User can create, view, update, and delete their stories.
- User's stories will be publicly shared and displayed on the homepage map.
- User can favorite stories, which will appear on their dashboard.

##### Wireframes:
Available [here](https://moqups.com/tran.malina@gmail.com/jDNTirJl/).

##### Unsolved problems or major hurdles:
- User is currently unable to remove a favorited story.
– For future iterations, I would really like to connect with Twitter and Facebook for login/signup and allow the content to 
be shareable by both of these platforms. 
- I found it challenging to send the user's favorite stories as a data object from the backend, due to the problem of scoping, 
among many other things. All in all, I feel comfortable with this. There were a series of steps that I needed to take: 
1) enabling a click function that would capture the story's ID, 2) sending an Ajax 'put' request to the server, 
3) querying the database for both the user's stories and the user's favorite stories (IDs were stored in an array), and 
4) properly displaying that data.

![Screenshot1](/screenshots/influx1.png?raw=true)
![Screenshot2](/screenshots/influx2.png?raw=true)
![Screenshot3](/screenshots/influx3.png?raw=true)
![Screenshot4](/screenshots/influx4.png?raw=true)
![Screenshot5](/screenshots/influx5.png?raw=true)
![Screenshot6](/screenshots/influx6.png?raw=true)
