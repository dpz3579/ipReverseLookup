const Reader = require('./rawReaderFiles/DBReader');
const dirPath = __dirname;
const countryDBName = "/GeoLite2-Country.mmdb";
const cityDBName = "/GeoLite2-City.mmdb";
let dbPath = dirPath + countryDBName;

const reader = new Reader(dbPath);

const phonecode = require('./countryinfo/phonecode.json');
const currency = require('./countryinfo/currency.json');

const getReverseIp = (remoteIP, category ,cb) => {
  if(typeof category == "function"){
    dbPath = dirPath + countryDBName;
    reader.reloadSync(dbPath);
    cb = category;
  }else if(category && typeof category == "string" && category.toLowerCase() == "city"){
    dbPath = dirPath + cityDBName;
    reader.reloadSync(dbPath);
  }

  const resp = reader.lookup(remoteIP); // resp will be null if no information is found for the IP or if the IP is malformed.
  if(resp && resp.country && resp.country.iso_code){
    if(phonecode[resp.country.iso_code]) resp.phoneCode = phonecode[resp.country.iso_code];
    if(currency[resp.country.iso_code]) resp.currency = currency[resp.country.iso_code];
  }
  cb(resp);
}

module.exports = {
  getReverseIp
};
