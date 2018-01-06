import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3001;
let path = 'total/';

app.get('*', (req, res) => {
    let dirs = fs.readdirSync(path);
    dirs.splice(dirs.indexOf('golden-template'), 1);
    dirs.splice(0, 0, 'golden-template');
    let result = {}
    console.log(JSON.stringify(dirs));
    for (let index = 0; index < dirs.length; index++) {
        let dir = dirs[index];
        let modules = fs.readdirSync(path + dir);
        console.log(modules);
        for (let j = 0; j < modules.length; j++) {
            let mod = modules[j];
            if (!(mod in result)) result[mod] = [];
            let filePath = `${path}/${dir}/${mod}/out.json`;
            result[mod].push(fs.readFileSync(filePath, 'utf8'));
        }
    }
    console.log(JSON.stringify(result));
    res.status(200).json(result);
});

app.listen(port, function listenHandler() {
    console.info('Running on: ' + port);
})



// dir
// var getBaseDir = new Promise((resolve, reject) => {
//     fs.readdir(path, function (err, items) {
//         if (err) {
//             reject(err)
//         } else {
//             resolve(path, items);
//         }
//     });
// });



// var getChildDir = (path, dirs) => {
//     return new Promise((resolve, reject) => {
//         childDir = [];
//         for (var i = 0; i < dirs.length; i++) {
//             fs.readdir(path + dirs[i], function (err, items) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     childDir = childDir.concat(items);
//                 }
//             });
//         }
//         resolve(childDir);
//     });
// }


// // var path = "abc";
// // getBaseDir(path)
// //     .then(dirs =>)



// fs.readdir(path, function (err, dirs) {
//     if (err) {
//         throw(err)
//     } else {
//        for (let index = 0; index < dirs.length; index++) {
//            const dir = array[index];
//             fs.readdir(path + dir, function (err, modules) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     childDir = childDir.concat(items);
//                 }
//             });
//        } 
//         resolve(path, items);
//     }
// });
