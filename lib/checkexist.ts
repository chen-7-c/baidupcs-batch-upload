export async function checkexist(remotefile:string):boolean{
const  fileexist = await retry(
       async () => {

const  result =execmeta(remotefile)


const { stdout, stderr } = result

const 记录日志={

remotefile,
stdout, stderr
}
console.log(JSON.stringify(记录日志,null,4))





//todo
},{


times: 5,
            onFailedAttempt: async (e) => {
                console.warn(e);
                console.warn("网络错误，3秒后重试");
                await sleep(3000);
            },
})
   return  fileexist
}


import execmeta from "./execmeta.js"
import pupkg from "@shanyue/promise-utils";
const { retry, sleep } = pupkg;
