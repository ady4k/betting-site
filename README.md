## ASP.NET / Angular Project
### Project for Advanced Web Development Course

Unfinished project for the ASP.NET with Angular Course, built using the specified technologies. Database management is done using PostreSQL, the avatars for the users' profile pictures are being saved on the cloud using the Cloudinary web service.  

The app is a casino style betting website, where users can bet on different virtual games, be friends with each other, send private messages, have a profile like a social media website and talk on a global-group chat.  

Currently implemented features include a fully implemented register and login system with automated database integration and password salt and encryption, token authentication, role management having Admin, Moderator and User as example roles, custom error handling on both front-end and back-end sides. Front-end implementation include special guards for elements to only be accessed when an user is an Admin, an user is authenticated and to prevent unsaved changes by stopping the browser interaction with a notification, needing user interaction. For testing, some user data has been automatically seeded into the database, allowing for interactions between users and client-server. Communication with private messages between the users is live, meaning the user does not have to constantly refresh the page in order for the chat to update.  


TODO:  
1. Implement games  
2. Implement the global-group chat  
3. Implement the bank/withdrawing abilities and currency  
4. Add all the admin-tools  
5. Functions for moderators to moderate the global-group chat
