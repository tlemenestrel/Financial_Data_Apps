// Loading a portfolio through IO Service

let io = require('ioservices');

// Create an array of input objects on which to run downloadPortfolio

let objects = [{portName:"Portfolio_Thomas", portType:"PORTFOLIO"},];

// Run downloadPortfolio. IOResults is an array because we passed an array
var ioresults = io.downloadPortfolio(objects);

// Display a table with the downloadPortfolio results
io.displayResults(ioresults);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Create an object on which to run uploadTrade

var object = {};

object['hldSecName']  = system.in.getString("Enter the Sec Name you want: ");
object['hldAcct']     = 'Imagine';
object['hldGroup']    = 'Imagine';
object['hldTrader']   = 'Imagine';
object['hldCurr']     = 'USD';
object['execTradeDt'] = 20200616;
object['execPrice']   = system.in.getString("Enter the Price you want: ");
object['execQty']     = system.in.getString("Enter the Quantity you want: ");

// Run uploadTrade. IOResult is an object because we passed an object

var ioresult = io.uploadTrade(object);

// Display the uploadTrade results

io.displayResults(ioresult);
