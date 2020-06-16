// Lookup an issuer

let issuer = referencedata.lookupIssuer("SA.V");

// Output the name of the issuer

system.out.println("The name of the issuer is: " + issuer.name);

// Output the country of the issuer

system.out.println("The country of the issuer is: " + issuer.country);
system.out.println("");

let country = referencedata.lookupCountry(issuer.country);

system.out.println("The name of the Country is: " + country.name);
system.out.println("The code of the country is: " + country.code);
system.out.println("The Major Index of the Country is: " + country.majorIndex);
