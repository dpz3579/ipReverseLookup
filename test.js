var remoip = "13.249.210.59";
var remo6ip = "2405:204:5524:b7af:d495:c38c:9f53:4f56";

var Reader = require('./rawReaderFiles/DBReader');
var reader = new Reader('GeoLite2-Country.mmdb');

// var resp = reader.lookup(remoip); // { city: { ... }, continent: { ... } }
var resp = reader.lookup(remo6ip); // { city: { ... }, continent: { ... } }
console.log("resp",resp);
