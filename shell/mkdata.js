/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-03-08 15:02:47 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-03-10 17:45:49
 */
let fs = require('fs');
let path = require('path');

// interface ObjApi {
//     name: string;
//     code: number;
//     data: string;
//     path: string;
//     desc: string;
//     type: number;
//     date: number;
//     age: string;
//     from: string;
//     to: string;
//     [key: string]: any;
// }

// Data depth
const ORDER = [
    "Apple",
    "Boy",
    "Cat",
    "Dog",
    "Eye",
    "Fly",
    "Girl",
    "Hill",
    "Ice",
    "Java",
    "Kiss",
    "Lab",
    "Miss",
    "Note",
    "Oriange",
    "Pat",
    "Quite",
    "Red",
    "Super",
    "Tank",
    "Umbrella",
    "Visit",
    "White",
    "X-ray",
    "Yellow",
    "Zoo"
];

/**
 * 生成随机字符串
 * @param n 字符长度
 */
function randomCoding(n = 8) {
    var result = [];
    for (var i = 0; i < n; i++) {
        //生成一个0到25的数字
        var ranNum = Math.ceil(Math.random() * 25);
        //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
        //然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
        result.push(String.fromCharCode(65 + ranNum));
    }
    return result.join('');
}

/**
 * 生成随机数
 */
function randomNum() {
    return Math.random() * 100 + Math.random() * 10;
}


function releaseDemo(i, curObj) {

    i++;

    curObj.name = ORDER[i];
    curObj.code = `${ORDER[i]}-C`;
    curObj.code = randomNum();
    curObj.data = randomCoding(128);
    curObj.path = randomCoding(50);
    curObj.desc = randomCoding(500);
    curObj.type = randomNum();
    curObj.date = randomNum();
    curObj.age = randomCoding(800);
    curObj.from = randomCoding();
    curObj.to = randomCoding();

    if (i < 15) {
        for (let j = 0; j < 5; j++) {
            curObj[`${ORDER[i]}-${j}`] = releaseDemo(i, {});
        }
    }

    return curObj;
}

try {
    fs.writeFileSync(path.resolve(__dirname, './demo.json'), JSON.stringify(releaseDemo(0, {})), { encoding: 'utf-8'});
}catch(e){
    console.error(process.memoryUsage());
    console.log(e);
}
