const fs=require("fs")


const quote="no beauty shines that of a good heart"
fs.writeFile("awesome.html",quote,() =>{

    console.log("completed writring awesome.html")
})


const quote2="live more worry less"

for (let i=1; i<=10; i++)
 
 {
     fs.writeFileSync('./backup/sample-${i}.html',quote2,()=>{
         console.log('completed writing sample-${i}.html')
     })
 }

 //console.log(process.argv)

 const[, ,n]=process.argv
 const double =(n) =>n*2
 console.log(double(n))

 const [, , n1,n2] =process.argv
 const sum=(n1,n2) => n1+n2
 console.log(sum(+n1, +n2))

