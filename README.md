**Genshin Impact Wiki**
===================

**Project Overview:**

The Genshin Impact Wiki is a personal project for me to combine my desire to familiarize with the MERN stack and my interest for the game Genshin Impact. It is basically a character wikipedia containing information about each character. I had a look at another much bigger project, Project Amber, and wandered if I could reproduce that web application myself. 

First I wanted to try creating something in React. Instead of saving all the data in a .js/.json file, I wanted to store it in MongoDB database so that it can scale and be easier to manage. From there I needed to know Node.js and Express as middleware to connect my database with my backend code. As an add-on, I challenged myself to work on the CRUD (Cread Read Update Delete) aspect of a database management system by implementing a simple comments section where users can comment on their favorite characters. 

In particular, I really struggled with the backend API (connecting to db) and especially the deploying of my application to Vercel. I used Vite for React so there were some adjustments needed for the environment variables, with many solutions not working for one reason or another. What I ended up doing was to upload the backend and frontend separately then linked the backend url (the domain link) to frontend environment variable. A good learning experience/debugging session in any case. User Authentication will be my next challenge. However, it will only be implemented after I add on more features that require logging in. Otherwise it will not be an useful addition.

Overall, for a small project I am happy how it turned out, having learnt a lot about React as well as styling in Tailwind CSS (styling was a lot more time than I thought)!


**Live Demo: [Visit the Genshin Impact Wiki](https://genshin-wiki-v1.vercel.app/)**


**Key Features:**

-   Character Database: Access detailed information on Genshin Impact characters, including stats, abilities, and lore.

-   Comments Section: Comment and discuss about your favorite character!


**Future Ideas:**

-   User Authentication as mentioned above. Will look into Firebase and others. 

-   Weapon Catalog: The concepts required to implement this is the same so in terms of practice this is low priority
  
-   Team Randomizer: For those who are bored and want some spice in their daily exploration. Requires user to login to store their existing characters. 

-   Team Recommendations: It will be interesting to think about how I can do this.



<br>
**Contributions and feedback are welcome! Feel free to open issues or submit pull requests to help enhance this project.** <br>
<br>

  
**Disclaimer:**

This project is a fan-made resource and is not affiliated with or endorsed by miHoYo, the developer of Genshin Impact. Also, all credits to the UI designer of Project Amber as this app heavily references its design for practice.
