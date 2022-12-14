$(function(){
    //防抖
    let timer = null
    let cacheobj = {}
    function laterGetSuggestList(kw) {
        timer = setTimeout(function(){
            getSuggestList(kw)
        }, 500)
    }
    //绑定输入事件
    $('.ipt').on('keyup',function(){ 
        clearTimeout(timer)
        let input = $(this).val().trim()
        if (input.length <= 0) return $('.suggest-list').empty().hide()
        //获取搜索建议列表
        //console.log(input)
        if(cacheobj[input]){
            return renderSuggestList(cacheobj[input])
        }
        laterGetSuggestList(input)

    })
    //封装用于获得列表的getSuggestList函数
    function getSuggestList(kw){
        $.ajax({
            url:'https://suggest.taobao.com/sug?q='+kw,
            dataType:'jsonp',
            success:function(res){
                console.log(res)
                renderSuggestList(res)
            }
        })
    }
    //模板引擎渲染函数   
    function renderSuggestList(res){
        if (res.result.length === 0) return $('.suggest-list').empty().hide()
        let temp = template('tpl-suggest',res)
        $('.suggest-list').html(temp).show()
        let k =$('.ipt').val().trim()
        cacheobj[k] = res
    }

})