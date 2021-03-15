var remoip = "13.249.210.59";

var Reader = require('./rawReaderFiles/DBReader');
var reader = new Reader('GeoLite2-Country.mmdb');

var resp = reader.lookup(remoip); // { city: { ... }, continent: { ... } }
console.log("resp",resp);
