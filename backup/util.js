var util=require("util")

var textmsg="Congralutions %s on their %dth birthday";

console.log(util.format(textmsg,"meenu",22))

const inspectOut={
    colors:true
}

console.log(util.inspect(textmsg,inspectOut))