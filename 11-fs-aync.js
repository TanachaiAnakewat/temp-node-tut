const { readFile, writeFile } = require('fs');

//no sync need to be the callback function
//callback function run everytime clicking button

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8',
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            const second = result
            writeFile('./content/result-async.txt',
                `Here is the result: ${first}, ${second}`,
                (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('done with this task')
                }
            )
        })
})
console.log('starting next task')

// starting next task -> done with this task
// async start the next task right away
// synce start -> dont -> start next one