var remoip = "13.249.210.59";

var MMDBReader = require('mmdb-reader');
var reader = new MMDBReader('GeoLite2-Country.mmdb');

var resp = reader.lookup(remoip); // { city: { ... }, continent: { ... } }
console.log("resp",resp);
