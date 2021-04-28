const Reader = require('./rawReaderFiles/DBReader');
const dbPath = __dirname + "/GeoLite2-Country.mmdb";

const phonecode = require('./countryinfo/phonecode.json');
const currency = require('./countryinfo/currency.json');

const reader = new Reader(dbPath);

const getReverseIp = (remoteIP, cb) => {
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
