/*const  greetings  = require("./fun");
const names= require("./name");
const {name1:name4,name2:name5}=names;
console.log(names);
greetings(name4);
greetings(name5);
 const os=require('os');
 const userInfo= os.userInfo();
 console.log(os.uptime());
 console.log(userInfo);
 const http= require('https');
 const server=http.createServer((req,res)=>{
     res.write("this is my first server");
      res.end();
 })

 server.listen(4000);*/
 const _=require('loadash');
 const arr=[1,[2,[3,[4]]]];
 const items=_.flattenDeep(arr);
 console.log(items);

 