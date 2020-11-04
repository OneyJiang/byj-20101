



// var arr = [ 'hello', 'kitty', 'cat', 'dog', 'beef', 'car' ];


// for (var i = 0; i < arr.length; i++) {
//     console.log(        '下标i对应的值', i, arr[i]       );
// }

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log('sum', sum);


// if  、  else  、  else if

var str = '小红';
var str2 = '小红';


//  = 
// a == b

if (str == str2) {
    // 当判断条件成立 执行此代码
    console.log('相等')
} else {
    // 当判断条件不成立 执行此代码
    console.log('不相等')
}



// 淘宝
// 双十一  8折
// 双十二  9折
// 平时    原价


var catPrice = 1000;
var data = '11.11'

if (data == '11.11') {
    catPrice = catPrice * 0.8;
} else if (data == '12.12') {
    catPrice = catPrice * 0.9;
} else {
    // 
}

console.log('猫的价格是：', catPrice)


