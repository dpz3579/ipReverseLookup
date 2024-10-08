const Reader = require("./rawReaderFiles/DBReader");
const fs = require("fs");

let countryDBName = "";
let cityDBName = "";

let reader = null;

const phonecode = require("./countryinfo/phonecode.json");
const currency = require("./countryinfo/currency.json");

async function initReverseLookup(countryDbPath, cityDbPath) {
  reader = new Reader(countryDbPath); // By default set reader to the country DB Path.

  if(countryDbPath && cityDbPath){
    try{
      if (countryDbPath && fs.existsSync(countryDbPath) && cityDbPath && fs.existsSync(cityDbPath)){
        countryDBName = countryDbPath;
        cityDBName = cityDbPath;
        return null;
      }
      else return "File does not exist!";
    } catch(err) {
      return err;
    }
  }else{
    try{
      if (countryDbPath && fs.existsSync(countryDbPath)){
        countryDBName = countryDbPath;
        return null;
      }
      else return "File does not exist!";
    } catch(err) {
      return err;
    }
  }
}

async function getReverseIp(remoteIP, category) {
  if(category && typeof category == "string" && category.toLowerCase() == "city"){
    dbPath = cityDBName;
    reader.reloadSync(dbPath);
  }else{
    dbPath = countryDBName;
    reader.reloadSync(dbPath);
  }

  const resp = reader.lookup(remoteIP); // resp will be null if no information is found for the IP or if the IP is malformed.
  if(resp && resp.country && resp.country.iso_code){
    if(phonecode[resp.country.iso_code]) resp.phoneCode = phonecode[resp.country.iso_code];
    if(currency[resp.country.iso_code]) resp.currency = currency[resp.country.iso_code];
  }
  return resp;
}

module.exports = {
  initReverseLookup,
  getReverseIp
};
