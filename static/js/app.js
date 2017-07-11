  $("#menu").metisMenu({
    subMenu:'.sub-menu'
  });
  //修改菜单支持打开页面
  $(function(){
    function allWidth(doms){
        var k = 0;
        $(doms).each(function(i,d){
            k += $(d).outerWidth(true);
        });
        return k;
    }
    //调整菜单的头部信息
    function changeIframeHead(n){
        var div = allWidth($(n).prevAll());
        var next = allWidth($(n).prevAll());
        var div2 = allWidth($('.iframeTabs').children().not('.page-tabs'))
        var k = $('.iframeTabs').outerWidth(true) - div2;
        var p = 0;
        
        if($('.page-tabs-content').outerWidth() < k) {
            p = 0; 
        } else {
            if(next <= (k - $(n).outerWidth(true) - $(n).next().outerWidth(true))){
                if((k - $(n).next().outerWidth(true)) > q){
                    p = div;
                    var m = n;
                    while((p - $(m).outerWidth()) > ($(".page-tabs-content").outerWidth() - k)){
                        p -= $(m).prev().outerWidth();
                        m = $(m).prev();
                    }
                }
            } else {
                if(div > (k - $(n).outerWidth(true) - $(n).prev().outerWidth(true))){
                    p = o - $(n).prev().outerWidth(true);
                }
            }
        } 
        $(".page-tabs-content").animate({
            marginLeft: 0 - p + "px"
        },
        "fast")          
    }
    //设置菜单的index值
    $('.nav-link').each(function(i){
        if(!$(this).attr('data-index')){
            $(this).attr('data-index',i);
        }
    })
    // 绑定点击事件
    $('.nav-link').on('click',function(){
        var src = $(this).attr('href');
        var index = $(this).data('index');
        var text = $.trim($(this).text());
        var flag = true;
        if(src == undefined || $.trim(src).length ===0){
            return false;
        }
        //判断是否打开这个项目
        $('.iframeTabs-item').each(function(){
            if($(this).data('id') == src){
                if(!$(this).hasClass('active')){
                    $(this).addClass('active').siblings('.iframeTabs-item').removeClass('active');
                    //调整距离
                    changeIframeHead($(this));
                    $('.iframeContent .iframeFrame').each(function(){
                        if($(this).data('id') == src){
                            $(this).show().siblings('.iframeFrame').hide();
                            return false;
                        }
                    })
                }
                flag = false;
                return false;
            }
        })
        //如果没打开
        if(flag){
             var p = '<a href="javascript:void(0);" class="active iframeTabs-item" data-id="' + src + '">' + text + ' <i class="fa fa-times-circle"></i></a>';
            $(".iframeTabs-item").removeClass("active");
            var n = '<iframe class="iframeFrame" name="iframe' + index + '" width="100%" height="100%" src="' + src + '" frameborder="0" data-id="' + src + '" seamless></iframe>';
            $(".iframeContent").find("iframe.iframeFrame").hide().parents(".iframeContent").append(n);
            $(".page-tabs .page-tabs-content").append(p);
            changeIframeHead($(".iframeTabs-item.active"))
        }
        return false;
    })
    //tabs的关闭按钮
    $('.page-tabs-content').on('click','.iframeTabs-item > i',function(){
        var parent = $(this).parents('.iframeTabs-item');
        var m = parent.data('id');
        var l = parent.width();
        if(parent.hasClass('active')){
            //如果关闭的活动的tabs
            if(parent.next('.iframeTabs-item').size()){
                var k = parent.next('.iframeTabs-item:eq(0)').data('id');
                parent.next('.iframeTabs-item:eq(0)').addClass('active');
                $('.iframeContent .iframeFrame').each(function(){
                    if($(this).data('id') == k){
                        $(this).show().siblings('.iframeFrame').hide();
                        return false;
                    }
                }) ;
                var n = parseInt($(".page-tabs-content").css("margin-left"));
                if(n < 0){
                    $(".page-tabs-content").animate({
                        marginLeft: (n + l) + "px"
                    },
                    "fast")
                } 
                parent.remove();
                $('.iframeContent .iframeFrame').each(function(){
                    if ($(this).data("id") == m) {
                        $(this).remove();
                        return false
                    }
                })   
            }
            //如果后面已经没有元素了
            if(parent.prev('.iframeTabs-item').size()){
                var k = parent.prev('.iframeTabs-item').data('id');
                parent.prev('.iframeTabs-item').addClass('active');
                $('.iframeContent .iframeFrame').each(function(){
                    if($(this).data('id') == k){
                        $(this).show().siblings('.iframeFrame').hide();
                        return false;
                    }
                })
                parent.remove();
                $('.iframeContent .iframeFrame').each(function(){
                    if($(this).data('id') == m){
                        $(this).remove();
                        return false;
                    }
                })
            }
        } else{
          parent.remove();
          $('.iframeContent .iframeFrame').each(function(){
                    if($(this).data('id') == m){
                        $(this).remove();
                        return false;
                    }
            })
          changeIframeHead('.iframeTabs-item.active')
        }
        return false;
    })
    //切换选项的按钮
    $('.page-tabs').on('click','.iframeTabs-item',function(){
        if(!$(this).hasClass('active')){
            var k = $(this).data('id');
            $('.iframeContent .iframeFrame').each(function(){
                    if($(this).data('id') == k){
                        $(this).show().siblings('.iframeFrame').hide();
                        return false;
                    }
            })
            $(this).addClass('active').siblings('.iframeTabs-item').removeClass('active');
            changeIframeHead(this);
        }
    })
    //左移动
    $('.iframeTabsLeft').on('click',function(){
        var o = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
        var l = allWidth($('.iframeTabs').children().not('.page-tabs'))
        var k = $('.iframeTabs').outerWidth(true)- l;
        var p = 0;

        if($('.page-tabs-content').width() < k){
            return false;
        }else{
            var m = $('.iframeTabs-item:first');
            var n = 0;
            while((n + $(m).outerWidth(true)) <= o){
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
            n = 0;
            if(allWidth($(m).prevAll())> k){
                while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                    n += $(m).outerWidth(true);
                    m = $(m).prev()
                }
                p = allWidth($(m).prevAll())
            }
        }
        $(".page-tabs-content").animate({
            marginLeft: 0 - p + "px"
        },
        "fast")
    })
    //右移动
    $('.iframeTabsRight').on('click',function(){
        var o = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
        var l = allWidth($(".iframeTabs").children().not(".page-tabs"));
        var k = $(".iframeTabs").outerWidth(true) - l;
        var p = 0;
        if ($(".page-tabs-content").width() < k) {
            return false
        } else {
            var m = $(".iframeTabs-item:first");
            var n = 0;
            while ((n + $(m).outerWidth(true)) <= o) {
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
            n = 0;
            while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
            p = allWidth($(m).prevAll());
            if (p > 0) {
                $(".page-tabs-content").animate({
                    marginLeft: 0 - p + "px"
                },
                "fast")
            }
        }
    })
    //关闭其他选项卡
    $('.J_tabCloseOther').on('click',function(){
        $(".page-tabs-content").children("[data-id]").not(":first").not(".active").each(function() {
            $('.iframeFrame[data-id="' + $(this).data("id") + '"]').remove();
            $(this).remove()
        });
        $(".page-tabs-content").css("margin-left", "0")
    })
    //定位当前选项卡
    $('.J_tabShowActive').on('click',function(){
        changeIframeHead($('.iframeTabs-item.active'))
    })
    //关闭所有选项卡
    $('.J_tabCloseAll').on('click',function(){
        $(".page-tabs-content").children("[data-id]").not(":first").each(function() {
            $('.iframeFrame[data-id="' + $(this).data("id") + '"]').remove();
            $(this).remove()
        });
        $(".page-tabs-content").children("[data-id]:first").each(function() {
            $('.iframeFrame[data-id="' + $(this).data("id") + '"]').show();
            $(this).addClass("active")
        });
        $(".page-tabs-content").css("margin-left", "0")
    
    })
  })