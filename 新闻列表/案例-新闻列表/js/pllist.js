function getlist(){
    $.ajax({
        type:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res) {
            if (res.status !== 200) return alert('失败')
            
            let temp = template('pllist', res)
            $('.list-group').html(temp)
        }
    })
}
getlist()
$(function(){
    $('#formAddCmt').submit(function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            if (res.status !== 201) {
                return alert('发表评论失败！')
            }
            getlist()
            $('#formAddCmt')[0].reset()
        })
    })
})