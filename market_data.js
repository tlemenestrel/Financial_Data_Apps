system.out.println("****Loading***");
system.out.println("");

// Load the current USDAUD vol curve

let deltaVol = market.lookupDeltaVolatility('USDAUD');

// Output the spot

let spot = deltaVol.spot;

system.out.println("The spot is: "+ spot);

// Output 1 month ATM forward

let fwd = deltaVol.getForward(20200715);

system.out.println("1 Month ATM forward is: " + fwd);

//////////////////////////////////////////////////////////////////////

// Load the S&P 500 and Nikkei 225 dividend curve

let divCurveSPX = market.lookupDividendCurve('.SPX');
let divCurveN225 = market.lookupDividendCurve('.N225');

// Find the next paydate and output to the output console

system.out.println("");
system.out.println('The next paydate for the S&P 500 is: ' + divCurveSPX.getNextPayDate());
system.out.println('The next paydate for the Nikkei 225 is: ' + divCurveN225.getNextPayDate());

//////////////////////////////////////////////////////////////////////

// Load the live Corn roll curve, extension RCYS

//let rollCurve = market.lookupRollCurve('RCYS');

//////////////////////////////////////////////////////////////////////

// Load the yield curve

let yieldCurve = market.lookupYieldCurve( 'USD-GOVT' );

// Get the discount factor in 1 month

system.out.println("");
system.out.println("The discount factor in 1 month is: " + yieldCurve.getDiscountFactor(20200716));

// Get the discount factor in 1 year

system.out.println("The discount factor in 1 year is: " + yieldCurve.getDiscountFactor(20210616));

//////////////////////////////////////////////////////////////////////

// Load the live S&P 500 volatility

let rlzdVol = market.lookupRealizedVolatility( '.SPX' );

system.out.println("");
system.out.println("The 90 day volofvol is: " + rlzdVol.getVol({expiryDays:90, column:'volofvol'}));
