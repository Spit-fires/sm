const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "ODUyMDUwNzA3MTM3OTUzODIy.YMBMDg.NLmYhPpZF9jDI1FX5YH_zVBRQXg", //Discord Bot Token
  prefix: ["!"], //Change PREFIX to your Prefix
  autoUpdate: false, // set to true if version should be updated automatically after a package update
})
 
bot.onMessage() // Allows Commands to Executed
 
bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})
bot.command({
name: "", 
code:  `Success`
})