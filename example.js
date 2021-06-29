// var remoip = "13.249.210.59";
var remoip = "2405:204:5524:b7af:d495:c38c:9f53:4f56";

const { getReverseIp } = require('.');

getReverseIp(remoip, (resp)=>{
  console.log("resp",resp);
});

getReverseIp(remoip, "test",(resp)=>{
  console.log("resp",resp);
});
