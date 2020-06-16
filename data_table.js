let table = new DataTable();

table.addColumn('Security');  // Add a column with the specified label
table.addColumn('Mkt Price');

table.addRow(['GOOG.O', 10]); // Add a row as an array
table.addRow(['MSFT.O', 20]);
table.addRow(['CSCO.O', 30]);

system.out.putTable('Sample Table', table)
