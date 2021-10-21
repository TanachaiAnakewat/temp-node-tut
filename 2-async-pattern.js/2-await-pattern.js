const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
   try {
    //The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/result-mind-grenades.txt', 
    `This is awesome : ${first}  ${second}`,{flag:'a'} )
    console.log(first,second)
} catch(error) {
    console.log(error);
   }

}

start()

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=> console.log(err))
