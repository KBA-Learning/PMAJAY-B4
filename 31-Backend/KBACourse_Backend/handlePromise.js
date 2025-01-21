const fetchData=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             const add = 2+3;
             if(add==5){
                 resolve(add);
             }
             else{
                 reject("The output is not correct");
             }
         },2000)
     //     const add = 2+3;
     //         if(add==5){
     //             resolve(add);
     //         }
     //         else{
     //             reject("The output is not correct");
     //         }
 
     })
 }
 async function printK(){
 const k = await fetchData();
 console.log(k);
 }
 printK();