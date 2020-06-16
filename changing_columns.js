// Loading my portfolio

var myPort = positions.loadPortfolio("Portfolio_Thomas");

// Getting the columns of my portfolio

var columns = myPort.getColumns();

// Checking the columns

system.out.println(JSON.stringify(columns,null,"\t"));

// Setting the columns

myPort.setColumns([ "Security", "Holding ID", "Day P&L" ]);

var columns = myPort.getColumns();

// Checking that the columns have been changed

for (var i = 0; i < columns.length; ++i) {

  system.out.println('Column: ' + columns[i]);

}

var table  = myPort.snap({ 'waitForCalc':true });
system.out.putTable('Result', table);
