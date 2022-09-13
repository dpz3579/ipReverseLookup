// This file is a example in your NODE Project.

var remoip = "85.166.88.195";
remoip = "176.75.115.105";
remoip = "84.208.58.34";
remoip = "176.75.115.105";
remoip = "212.30.37.147";
// var remoip = "2405:204:5524:b7af:d495:c38c:9f53:4f56";

const { initReverseLookup, getReverseIp } = require('ipreverselookup');

const countryDBName = "db/GeoLite2-Country.mmdb";
const cityDBName = "db/GeoLite2-City.mmdb";

initReverseLookup(countryDBName, cityDBName, (err)=>{
  if(err){
    console.log("err",err);
  }else{
    getReverseIp(remoip, "city",(resp)=>{
      console.log("resp",JSON.stringify(resp, 0, 2));
    });
  }
});

// resp {
//   "city": {
//     "geoname_id": 3143244,
//     "names": {
//       "de": "Oslo",
//       "en": "Oslo",
//       "es": "Oslo",
//       "fr": "Oslo",
//       "ja": "オスロ",
//       "pt-BR": "Oslo",
//       "ru": "Осло",
//       "zh-CN": "奥斯陆"
//     }
//   },
// }

// "city": {
//   "geoname_id": 3141121,
//   "names": {
//     "en": "Roverud"
//   }
// },
