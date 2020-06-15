// Get the desired outputs from the user

let symbol = system.in.getString("Enter the symbol you want: ");
let startDate = system.in.getString("Enter the start date: ");
let endDate = system.in.getString("Enter the end date: ");

// Call the getPricesTable to fetch the historical prices and build a DataTable from it

let table = timeseries.getPricesTable(symbol, startDate, endDate);

// Output the data table

system.out.putTable('Sample Table', table)

// Get the desired outputs from the user

let symbol = system.in.getString("Enter the symbol you want: ");
let frequency = system.in.getString({id:'What is the frequency you want?', values:['1 Calendar Day','1 Business Day','1 Week','1 Month','1 Year']});
let startDate = system.in.getString("Enter the start date: ");
let endDate = system.in.getString("Enter the end date: ");

// Using a switch statement

switch (frequency) {

  case "1 Calendar Day":
    frequency = "1D"
    break;
  case "1 Business Day":
    frequency = "1D"
    break;
  case "1 Week":
    frequency = "1W"
    break;
  case "1 Month":
    frequency = "1M"
    break;
  case "1 Year":
    frequency = "1nY"
    break;
}

// Creating an Info object to pass later to the getPricesTable function

let info = {symbol:symbol, startDate:startDate, endDate:endDate, frequency:frequency};

// Call the getPricesTable to fetch the historical prices and build a DataTable from it

let table = timeseries.getPricesTable(info);

// Creating a variable to store the name of one of the DataTable columns' header for later use

let tableHeader = table.getLabel(1);

// Output the data table

system.out.putTable('Security Prices', table);

// Export the DataTable to a graph

system.out.exportToGraph(table, {

    title:     'Security Prices',
    xAxis:     'Date',
    yAxes:     tableHeader,
    graphType: 'bar'

    } );
