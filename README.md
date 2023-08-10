# Youtube-Clone
Using mongoDB, mongoose, NodeJS, express and React.

MongoDB FUNCTIONALITY AND FILE STRUCTURE

Made with the following features

1. Complete signIn, and signUp authentication(including password recoveries and resets) using JsonWebTokens and the bcrypt encryption mechanism
2. Rating videos as likes or dislikes
3. Creating channels
4. Subscribing to channels and Unsubscribing
5. Placing comments at videos, and also rating the comments as likes or dislikes
6. Editing user profiles including passwords

The backEnd was made essentially as an API, so this is fully functional with your own application if you don't have time to build an API   ---> But my api isn't hosted yet.
I used the MVCR (Model, View(my react), Controller, Routes) methodology to manage my file structure. 
The main backEnd file connecting to my database and linked to my configuration file is server.js ---> Database hosted by MongoDB Atlas

REACT FUNCTIONALITY AND STYLING

1. Very fast YouTube clone with react, react-routers, and 
2. Managed routes(also nested routes) with react-router-dom, with modern query features like useSearchParams, useParams, useNavigate, etc
3. Using third party npm packages for additional functionality like react-youtube (the YouTube component)
4. Managing components and parsing data around from child to parent, parent to child and also state management with useContext.
5. CSS modules for styling
