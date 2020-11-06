// function () {}


// 一进到这个js就开始执行，不需要主动调用
// 通过ajax 请求页面需要展示的数据
$.ajax({
    async: false,
    url: 'https://www-pre.banyuan.club/api/course/detailList?id=100006',
    type: 'GET',
    dataType: 'json',
    success: function(res) {
        console.log('res', res);

        // 返回整体是一个对象res，通过多层的 . 取到里面真正要循环渲染的数组lessonList，，，然后把取到的列表 给变量 data。
        var data = res.data.lessonList;

        dealData(data);


    },
    error: function(err) {
    }
})



// ajax得到数据之后，在此函数里 处理后续的代码
function dealData(arr) {
    // arr 是个数组，  data里面的每一项是对象
    // 通过for循环，arr[i] 取到arr 的每一项, arr[i]此时是一个对象
    console.log('我是函数内的打印', arr);

    // parentId 为0 才显示在页面上，通过for循环，判断每一项的parentId是否是0，如果是0，就push追加到新数组newArr里面

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[ i ].parentId == 0) {
            newArr.push(arr[ i ]);
        }
    }


    var container = $("#container") //获取id为container的元素(标签)
    for (var a = 0; a < newArr.length; a++) {
        container.append(`
            <div class="item-lesson">
                <div class="item-box">
                <img src="${newArr[a].coverUrl}" alt="">
                    <p class="item-title">${newArr[a].title}</p>
                </div>
                <p class="item-desc">${newArr[a].summary}</p>
            </div>
            `)
    }

    console.log('最终要显示的数据', newArr);

}











// $.ajax({
//     url: 'https://www-pre.banyuan.club/api/course/detailList',
//     data: {
//         id: 100006
//     }
// })






