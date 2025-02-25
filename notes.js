// Validations:
// When we enter data in the form,the browser and / or the web server will check to see that the data is in the correct format and within the constrainsts set by the application.

// Form validations:
// When we enter data in the form ,the browser and /or the web server will check to see that the data is in the correct format and within the constraints set by the application

// Schema can be validate by tool joi

// Pull operator:
// The $pull operator removes from an existing array all insataces of a value or values that match a specified condition.

// Express router:
// Express Routers are a way to organize your express application such that our primary app.js file does not become bloated.
// const router = express.Router(); 

// Cookies:
// Web cookies
// HTTP cookies are small blocks of data created by web server  while a user is browsing website and placed on the users computer or others devices by the users web browser. 

// State:
// Stateful protocols:
// Stateful protocols require server to save the status and session information.
// eg-ftp

// stateless Protocol:
// Stateless protocol does not require the server to retain the server information .
// eg-http

// Express sessions:
// An attempt to make our session sucessful.
// Express session npm package

// connect flash:
// The flash is a special area of the session used for storing messeges. Messeges are written to the flash and cleared after being displayed to the user.
// It is npm package

// Authentication:
// Authentication is process of verifying who someone is

// Authorization:
// Authorization is the process of veryfying what specific applications ,files and data a user has acess to

// Storing passwords:
// We never store passwords as it is.we store there hased form.

// Hashing dunction:
// For every input , there is fixed output
// They are one way fucntions,we cant get input from output
// For a different input , there is difficult output but of same lenght
// Small changes in input should bring large changes in output.

// Salting:
// Password salting is a technique to protect passwords stored in database by adding a string of 32 or more charcaters and then hashing them

// Passport
// npm i passport
// npm i passport-local
// npm i passport-local-mongoose

// Configuration strategy
// Passport.initialize()
// A middleware that initializes password

//password.session()
// A web application needs the ability to identify users as they browse from page to page.This series of requests and responses ,each associated with the same user,is knowm as session.

// passport.use(new LocalStrategy(User.authenticate()))

// Login after signup:
// Passports login method automatically establishes a login session
// We can automatically invoke login to automatically login a user.

// MVC:
// Model View Controller
// Impelment design pattern for Listings.

// router.route(path)
// Returns an instance of a route you can then use to handle HTTP verbs with optional middleware.Use route.route() to avoid duplicate route naming and typing errors.

// Geocoding:
// Geocoding is the process of converting addresses (like a street address) into geographic coordinates(like latitude and longitude) ,which you can use to place markers on a map,or position the map.