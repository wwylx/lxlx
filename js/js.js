$(function(){
    $("#menu").click(function(e){ // 给菜单绑定点击时间
        $("#aside_nav").css("left","0"); // css left = 0 就从左往右滑了出来
        $(".aside_navMedeo").show();
        $(document).one("click",function(){ // 这个one的意思是 点击一次  就失效了 点击时间
            $("#aside_nav").css("left","-270px"); // 回去了导航条
            $(".aside_navMedeo").hide();
        });
        e.stopPropagation(); // 阻止冒泡 固定写法
    });
    $("#aside_nav").click(function(e){ // 这个可写可不写 阻止点击导航条发生点击事件
        e.stopPropagation();
    })
    // 获取滚动条距离顶部的距离
    var old_scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    $(window).scroll(function(){
//		获取 滚动条距离顶部的距离
        var new_scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        console.log(new_scroll)
        if (old_scroll-new_scroll<0) {
//			alert("向下滑");
            $("#aside_nav").css("left","-270px");
            $(".aside_navMedeo").hide();
            $("header").css("top","-100px");
        }else if (old_scroll-new_scroll>0) {
//			alert("向上滑");
            $("#aside_nav").css("left","-270px");
            $(".aside_navMedeo").hide();
            $("header").css("top","0");
            if(new_scroll > 200){
                $("header").addClass("active");
            }else{
                $("header").removeClass("active");
            }
        }
        old_scroll=new_scroll;
    })
})
