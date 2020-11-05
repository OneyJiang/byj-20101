// 1
// function isPrime(num) {
//     for (var j = 2; j < num; j++) {
//         if (num % j == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log('311-' + isPrime(311))
// console.log('3-' + isPrime(3))
// console.log('9-' + isPrime(9))


// 2 排序
// var array = [ 1, 3, 5, 4, 8, 7, 2 ];
// for (let i = 0; i < array.length - 1; i++) {

//     for (let j = 0; j < array.length - 1 - i; j++) {

//         if (array[j] > array[j + 1]) {
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }
// console.log("排序后的数组", array);




// 3 计算天和小时
// var time = 109;
// var day = Math.floor(109 / 24)
// var hour = 109 % 24;

// console.log(`共有${day}天${hour}小时`)




// 4 99乘法表
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         console.log(`${i}*${j}=${i*j}`)
//     }
// }




// 5 是否是偶数
// function isEvenNum(num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }



// 附加题
function fun2() {
    for (var i = 1; i < 100; i++) {
        var count = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
            if (j == i && count == 2) {
                console.log(i)
            }
        }
    }
}

function fun3() {
    var arr = [];
    for (var i = 2; i < 100; i++) {
        var a = true;
        for (var j = 2; j < i; j++) {
            //判断i能否被j整除
            if (i % j == 0) {
                //能被整除则说明不是质数，修改布尔值为false
                a = false;
            }
        }
        // 如果是质数，追加到数组里
        if (a) {
            arr.push(i);
        }
    }
    //打印质数数组
    console.log("所有的质数", arr);
}

// fun2();
// console.log('------------------------------------------')
fun3();
