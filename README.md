# ipReverseLookup
Reverse Lookup to get country detail from the requesting IP.

# Setup 
Getting IP address in req.ip in your NodeJS Application
Follow either of the steps.

> https://mhagemann.medium.com/how-to-get-visitors-ip-address-in-nginx-and-express-js-application-5823959eb6cb
>
> or
>
> https://stackoverflow.com/questions/30943112/get-ip-user-with-nginx-and-node

**⚠️ : The Database is from 2nd Sept 2019, i'm trying to get more information, & will try to update this repo with latest database, as soon as possible.**

# Testing
> npm test
> 
> Eg if you IP address is **13.249.210.59**

Response format :

```
{
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
