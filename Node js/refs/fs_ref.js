const fs = require('fs')
const path = require('path')

//File system
// fs.mkdir(path.join(__dirname, 'nodes'), err => {
//     if (err) throw err

//     console.log('папка создана')
// })

// fs.writeFile(path.join(__dirname, 'nodes', 'mynotes.txt'),
//     'Hello World',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')

//         fs.appendFile(
//             path.join(__dirname, 'nodes', 'mynotes.txt'),
//             ' From append file',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')

//                 fs.readFile(
//                     path.join(__dirname, 'nodes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     } 
// )


fs.rename(
    path.join(__dirname, 'nodes', 'mynotes.txt'),
    path.join(__dirname, 'nodes', 'notes.txt'),
    err => {
        if (err) throw err
        
        console.log('Файл перименован')
    }
)