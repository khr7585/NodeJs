function delay(ms){
    return new Promise((resolve)=>{
         setTimeout(resolve,ms);
    });
}
async function start(){
    console.log("start");
    await delay(3000);
    console.log("3 seconds completed");
}
start();