// var arr = [ 1, 4, 5, 2 ];

// arr[i]   arr[0]
// loop1: (i=0) {
//     loop1 ( i = 0; j = 0  ): 1 < 4 ? [ 4, 1, 5, 2 ]     (0, 1)
//     loop2（ i = 0; j = 1  ）: 1 < 5 ? [ 4, 5, 1, 2 ]     (1, 2)
//     loop3(i = 0; j = 2 ): 1 < 2 ? [ 4, 5, 2, 1 ](2, 3)
//                                                 { j, j+1}
// }

// loop2: {
//     loop1: 4 < 5 ? [ 5, 4, 2, 1 ]
//     loop2: 4<2? [5, 4, 2, 1]
// }

// loop3: {
//     loop1: 5<4? [5, 4, 2, 1]
// }
var arr = [ 1, 4, 19, 10, 7, 3, 5, 2 ];
    
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++){
        if (arr[ j ] > arr[ j + 1 ]) {
            var temp = arr[ j ];
            arr[ j ] = arr[ j + 1 ];
            arr[ j + 1 ] = temp;
        }
    }
}
console.log('最终得到的排序结果：', arr);




// 
function getArr(num) {
    var arr = [];
    for (j = 2; j <= num; j++) {
        var flag = '是质数';
        for(var i = 2; i < j; i++  ){
            if(j % i == 0){
                flag = '不是质数';
            }
        }
        if (flag == '是质数') {
            arr.push(j);
        }
    }
    console.log('质数有', arr);
}

getArr(10);



