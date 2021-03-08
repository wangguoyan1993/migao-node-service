/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-03-08 15:02:47 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-03-08 18:13:02
 */

interface ObjApi {
    name: string;
    code: number;
    data: string;
    path: string;
    desc: string;
    type: number;
    date: number;
    age: string;
    from: string;
    to: string;
    [key: string]: any;
}

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
function randomCoding(n = 8): string {
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
function randomNum(): number {
    return Math.random() * 100 + Math.random() * 10;
}

/**
 * 生成一个随机对象
 */
function randomObject(): ObjApi {
    return {
        name: randomCoding(),
        code: randomNum(),
        data: randomCoding(128),
        path: randomCoding(50),
        desc: randomCoding(500),
        type: randomNum(),
        date: randomNum(),
        age: randomCoding(800),
        from: randomCoding(),
        to: randomCoding()
    }
}

/**
 * 
 * @param index 
 */
function releaseData(curObj: ObjApi, index: number) {


    curObj.name = `${ORDER[index]}${randomNum}`;

    // 在结构深度范围内进行递归
    if (index < ORDER.length) {
        for (let j = 0; j < 5; j++) {
            curObj[curObj.name] = releaseData(curObj, index + 1);
        }
    }

    return curObj;
}

function getFullJSON(){

}


