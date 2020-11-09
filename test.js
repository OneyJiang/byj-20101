//get请求的
//post不会
//通过阿贾克斯，请求页面需要展示的数据
//一进来就会执行，不需要调用
$.ajax({
    url:'https://www-pre.banyuan.club/api/course/detailList?id=100006',
    type:'GET',
    dataType:'json',//success是个function函数
    success:function(res){
        console.log('res',res);

        //返回整体是一个对象res，通过多层的，取到里面真正要循环渲染的数
        //组lessonList，然后把他取到的列表给变量data
        var data = res.data.lessonList;
        console.log('得到的列表',data);


        dealData(data);//传参数给外面的函数

    },
    error:function(err){
        console.log(           
        )
    }
})



//阿贾克斯得到数据之后 在此函数里 处理后续数据的代码
function dealData(arr){
        //data 是个数组 data里面的每一项是对象
        //通过for循环，data[i]，取到data的每一项
        //通过for循环，arr[i]的每一项，arr[i]此时是一个对象
        console.log('我是函数打印',arr);

        // parentId 为0 才显示在页面上，通过for循环，判断每一项的parentId是否是0，如果是0，则push追加到新数组newArr里面

        var newArr = [];
        for(var i = 0; i < arr.length; i++) {
             if(arr[i].parentId == 0){
                newArr.push(arr[i]);
            }
        }
        console.log('最终要显示的数据',newArr);

        var container =$("#container")//获取id为container的标签
        for(var a=0;a<newArr.length;a++){//container添加子元素
            console.log('/////', newArr[a].summary)
            container.append(`
            <div class="item-lesson">
                <div class="item-box">
                    <img src="${newArr[a].coverUrl}"arl="">
                    <p class="item-title">${newArr[a].title}</p>
                </div>
                <p class="item-desc">${newArr[a].summary}</p>
            </div>
            `)
        }

        console.log('最终要显示的数据',newArr);
}

       
    











