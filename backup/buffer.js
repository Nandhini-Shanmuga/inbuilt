const buffer=require("buffer")

buf=Buffer.alloc(256)
var data=buf.write("Hello Everyone")
console.log(data)

var b1=Buffer.from("1234567890")//targetstart
console.log(b1)

var b2=Buffer.from("HELLOO")//source start=index
console.log(b2)

b2.copy(b1,2,2)
console.log(b1.toString())