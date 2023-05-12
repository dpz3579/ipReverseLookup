const Reader = require("./rawReaderFiles/DBReader");
const fs = require("fs");

let countryDBName = "";
let cityDBName = "";

let reader = null;

const phonecode = require("./countryinfo/phonecode.json");
const currency = require("./countryinfo/currency.json");

const initReverseLookup = (countryDbPath, cityDbPath, cb) => {
  reader = new Reader(countryDbPath); // By default set reader to the country DB Path.

  if(typeof cityDbPath == "function"){
    cb = cityDbPath;
    try{
      if (countryDbPath && fs.existsSync(countryDbPath)) cb(null);
      else cb("File does not exist!");
    } catch(err) {
      cb(err);
    }
  }else{
    try{
      if (countryDbPath && fs.existsSync(countryDbPath) && cityDbPath && fs.existsSync(cityDbPath)) cb(null);
      else cb("File does not exist!");
    } catch(err) {
      cb(err);
    }
  }
}

const getReverseIp = (remoteIP, category ,cb) => {
  if(typeof category == "function"){
    dbPath = countryDBName;
    reader.reloadSync(dbPath);
    cb = category;
  }else if(category && typeof category == "string" && category.toLowerCase() == "city"){
    dbPath = cityDBName;
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
  initReverseLookup,
  getReverseIp
};
