function buZero(n){
    return (n<10)?'0'+n:n
}

template.defaults.imports.dateFormat = function(data){
    let date = new Date(data)
    let y = date.getFullYear()
    let m = buZero(date.getMonth()+1) 
    let d = buZero(date.getDate()) 
    let h = buZero( date.getHours())
    let min = buZero(date.getMinutes()) 
    let s = buZero(date.getSeconds()) 

    return y+'-'+m+'-'+d+' '+h+':'+min+':'+s
}

function getNewlist(){
    $.ajax({
        type:'GET',
        url:'http://www.liulongbin.top:3006/api/news',
        success:function(res){
            if (res.status !== 200)return alert('失败')
            for(let i =0; i<res.data.length;i++){
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res)
            let temp = template('newlist',res)
            $('#news-list').html(temp)
        }
    })
}
getNewlist()