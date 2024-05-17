const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved-one!!!");
    },6000);
});
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved-two!!!");
    },1000);
});

async function getData(){
 console.log("hello javascript!!!!!!!!!!!!!!!!");
 const val1= await p1;
 console.log(val1);
 console.log("hello1");
 const val2= await p2;
 console.log(val2);
 console.log("hello2");
}
getData();