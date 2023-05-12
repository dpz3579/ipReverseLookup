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

const err = await initReverseLookup(countryDBName, cityDBName); // It will return null, if files are loaded successfully, if it returns anything else that's an error.
console.log("err",err);

<!-- This is to be called when only the initialisation is done. -->
const resp = await getReverseIp(ip); // resp will be null if IP is not valid or malformed eg if IP is :::1, it will return null
console.log("resp",JSON.stringify(resp, 0, 2));

const resp = await getReverseIp(ip, "city"); // resp will be null if IP is not valid or malformed eg if IP is :::1, it will return null
console.log("resp",JSON.stringify(resp, 0, 2));
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
> Eg if you IP address is **212.30.37.147**


Response format :

``` json
{
  "continent": {
    "code": "EU",
    "geoname_id": 6255148,
    "names": {
      "de": "Europa",
      "en": "Europe",
      "es": "Europa",
      "fr": "Europe",
      "ja": "ヨーロッパ",
      "pt-BR": "Europa",
      "ru": "Европа",
      "zh-CN": "欧洲"
    }
  },
  "country": {
    "geoname_id": 2750405,
    "is_in_european_union": true,
    "iso_code": "NL",
    "names": {
      "de": "Niederlande",
      "en": "Netherlands",
      "es": "Holanda",
      "fr": "Pays-Bas",
      "ja": "オランダ王国",
      "pt-BR": "Holanda",
      "ru": "Нидерланды",
      "zh-CN": "荷兰"
    }
  },
  "registered_country": {
    "geoname_id": 272103,
    "iso_code": "LB",
    "names": {
      "de": "Libanon",
      "en": "Lebanon",
      "es": "Líbano",
      "fr": "Liban",
      "ja": "レバノン共和国",
      "pt-BR": "Líbano",
      "ru": "Ливан",
      "zh-CN": "黎巴嫩"
    }
  },
  "phoneCode": "31",
  "currency": "EUR"
}
```

<br/>

Response format when `city` is passed as second argument:

``` json
{
  "city": {
    "geoname_id": 2759794,
    "names": {
      "en": "Amsterdam",
      "es": "Ámsterdam",
      "fr": "Amsterdam",
      "ja": "Amusuterudamu",
      "pt-BR": "Amesterdã",
      "ru": "Амстердам",
      "zh-CN": "阿姆斯特丹"
    }
  },
  "continent": {
    "code": "EU",
    "geoname_id": 6255148,
    "names": {
      "de": "Europa",
      "en": "Europe",
      "es": "Europa",
      "fr": "Europe",
      "ja": "ヨーロッパ",
      "pt-BR": "Europa",
      "ru": "Европа",
      "zh-CN": "欧洲"
    }
  },
  "country": {
    "geoname_id": 2750405,
    "is_in_european_union": true,
    "iso_code": "NL",
    "names": {
      "de": "Niederlande",
      "en": "Netherlands",
      "es": "Holanda",
      "fr": "Pays-Bas",
      "ja": "オランダ王国",
      "pt-BR": "Holanda",
      "ru": "Нидерланды",
      "zh-CN": "荷兰"
    }
  },
  "location": {
    "accuracy_radius": 20,
    "latitude": 52.3716,
    "longitude": 4.8883,
    "time_zone": "Europe/Amsterdam"
  },
  "postal": {
    "code": "1012"
  },
  "registered_country": {
    "geoname_id": 272103,
    "iso_code": "LB",
    "names": {
      "de": "Libanon",
      "en": "Lebanon",
      "es": "Líbano",
      "fr": "Liban",
      "ja": "レバノン共和国",
      "pt-BR": "Líbano",
      "ru": "Ливан",
      "zh-CN": "黎巴嫩"
    }
  },
  "subdivisions": [
    {
      "geoname_id": 2749879,
      "iso_code": "NH",
      "names": {
        "de": "Nordholland",
        "en": "North Holland",
        "es": "Holanda Septentrional",
        "fr": "Hollande-Septentrionale",
        "pt-BR": "Holanda do Norte",
        "ru": "Северная Голландия"
      }
    }
  ],
  "phoneCode": "31",
  "currency": "EUR"
}
```
