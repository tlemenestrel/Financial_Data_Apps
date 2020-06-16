let myPort = positions.loadPortfolio('Portfolio_Thomas');

// Print the portfolio's name
system.out.println('Name: ' + myPort.name);

// Print number of holdings
system.out.println('Holding Count: ' + myPort.holdings.length);

// Print the total $ Realized
system.out.println('$ Realized: ' + myPort.totals['$ Realized']);

// Print the first holdings fair
system.out.println('Fair: ' + myPort.holdings[0]['Fair']);
