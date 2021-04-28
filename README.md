# ipReverseLookup
Reverse Lookup to get country detail from the requesting IP.

# NPM install guide
> npm i --save https://github.com/dpz3579/ipReverseLookup.git


# Usage

```
const { getReverseIp } = require('ipreverselookup');

getReverseIp(ip, (resp)=>{
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

**✅ : The Database is from 20210427 i.e. 27th Apr 2021, i'll try to keep on updating this repo with latest database, as soon as possible.**

# Testing
> npm test
>
> Eg if you IP address is **13.249.210.59**


Response format :

```
{
  phoneCode: '1', // This will appear if there is data present in countryinfo/phonecode.json
  currency: 'USD', // This will appear if there is data present in countryinfo/currency.json
  continent: {
    code: 'NA',
    geoname_id: 6255149,
    names: {
      de: 'Nordamerika',
      en: 'North America',
      es: 'Norteamérica',
      fr: 'Amérique du Nord',
      ja: '北アメリカ',
      'pt-BR': 'América do Norte',
      ru: 'Северная Америка',
      'zh-CN': '北美洲'
    }
  },
  country: {
    geoname_id: 6252001,
    iso_code: 'US',
    names: {
      de: 'USA',
      en: 'United States',
      es: 'Estados Unidos',
      fr: 'États-Unis',
      ja: 'アメリカ合衆国',
      'pt-BR': 'Estados Unidos',
      ru: 'США',
      'zh-CN': '美国'
    }
  },
  registered_country: {
    geoname_id: 6252001,
    iso_code: 'US',
    names: {
      de: 'USA',
      en: 'United States',
      es: 'Estados Unidos',
      fr: 'États-Unis',
      ja: 'アメリカ合衆国',
      'pt-BR': 'Estados Unidos',
      ru: 'США',
      'zh-CN': '美国'
    }
  }
}
```
