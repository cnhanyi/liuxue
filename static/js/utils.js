var utils = {
    ajaxGet:function(url,data){
        var params = data || {};
        return $.ajax({
            url:url,
            data:data,
            type:'get',
            dataType:'json'
        }).then(function(data){
            //逻辑处理登出权限判断
            return data;
        })
    },
    ajaxPost:function(url,data){
        var params = data || {};
        return $.ajax({
            url:url,
            data:data,
            type:'post',
            dataType:'json'
        }).then(function(data){
            //逻辑处理登出权限判断
            return data;
        })
    }
}