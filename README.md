# ipReverseLookup

Reverse Lookup to get country detail from the requesting IP.

[![GitHub stars](https://img.shields.io/github/stars/dpz3579/ipReverseLookup?style=flat-square)](https://github.com/dpz3579/ipReverseLookup/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/dpz3579/ipReverseLookup?label=issues&style=flat-square)](https://github.com/dpz3579/ipReverseLookup/issues)
[![GitHub forks](https://img.shields.io/github/forks/dpz3579/ipReverseLookup?style=flat-square)](https://github.com/dpz3579/ipReverseLookup/network)
[![GitHub license](https://img.shields.io/github/license/dpz3579/ipReverseLookup?style=flat-square)](https://github.com/dpz3579/ipReverseLookup)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)


# NPM install guide
> npm i --save https://github.com/dpz3579/ipReverseLookup.git


# Usage

> You can look at `example.js` for more detail.

```
const { initReverseLookup, getReverseIp } = require('ipreverselookup');

const countryDBName = "db/GeoLite2-Country.mmdb"; // Your mmdb db path
const cityDBName = "db/GeoLite2-City.mmdb"; // Your mmdb city db path

initReverseLookup(countryDBName, cityDBName, (err)=>{
  if(err) console.log("The insitalisation was not done",err);
});

<!-- This is to be called when only the initialisation is done. -->
getReverseIp(ip, (resp)=>{
  // resp will be null if IP is not valid or malformed eg if IP is :::1, it will return null
  console.log(resp);
});

getReverseIp(ip, "city", (resp)=>{
  // resp will be null if IP is not valid or malformed eg if IP is :::1, it will return null
  console.log(resp);
});
```

# Setup
Getting IP address in req.ip in your NodeJS Application
Follow either of the steps.

> https://mhagemann.medium.com/how-to-get-visitors-ip-address-in-nginx-and-express-js-application-5823959eb6cb
>
> or
>
> https://stackoverflow.com/questions/30943112/get-ip-user-with-nginx-and-node

**✅ : The Database can be found in old commits, but i suggest you to register with MaxMind & get your own database.**

**Link here.**
> https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en


# Test an example
> npm run example
>
> Make sure you change the dbpath in ```example.js``` before you run test.
>
> Eg if you IP address is **13.249.210.59**


Response format :

``` json
{
  "phoneCode": "1", // This will appear if there is data present in countryinfo/phonecode.json
  "currency": "USD", // This will appear if there is data present in countryinfo/currency.json
  "continent": {
    "code": "NA",
    "geoname_id": 6255149,
    "names": {
      "de": "Nordamerika",
      "en": "North America",
      "es": "Norteamérica",
      "fr": "Amérique du Nord",
      "ja": "北アメリカ",
      "pt-BR": "América do Norte",
      "ru": "Северная Америка",
      "zh-CN": "北美洲"
    }
  },
  "country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  },
  "registered_country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  }
}
```

<br/>

Response format when `city` is passed as second argument:

``` json
{
  "continent": {
    "code": "NA",
    "geoname_id": 6255149,
    "names": {
      "de": "Nordamerika",
      "en": "North America",
      "es": "Norteamérica",
      "fr": "Amérique du Nord",
      "ja": "北アメリカ",
      "pt-BR": "América do Norte",
      "ru": "Северная Америка",
      "zh-CN": "北美洲"
    }
  },
  "country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  },
  "location": {
    "accuracy_radius": 1000,
    "latitude": 37.751,
    "longitude": -97.822,
    "time_zone": "America/Chicago"
  },
  "registered_country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  },
  "phoneCode": "1", // This will appear if there is data present in countryinfo/phonecode.json
  "currency": "USD" // This will appear if there is data present in countryinfo/currency.json
}
```
