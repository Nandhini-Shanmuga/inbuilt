var url=require("url")
var urlAddress="https://github.com/Nandycapge5/ParellProject/blob/master/BankApplicationJdbc.zip"

var parseAddress=url.parse(urlAddress)
console.log(parseAddress)
console.log(parseAddress.hostname)
console.log(parseAddress.query)
