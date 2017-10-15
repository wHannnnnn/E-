$(".xiala ul li").mouseenter(function () {
    var index=$(this).index()
    $(".goutu").eq(index).stop().show(500).parent().siblings().find(".goutu").stop().hide(500)
    $(".shelter").eq(index).stop().show(10).parent().siblings().find(".shelter").stop().hide(10)
    $(".xiala ul li").eq(index).css("border", "2px solid #ffbfcf").siblings().css("border", "2px solid #fff")
    $(".xiala ul li section").eq(index).stop().animate({left:20},500).parent().siblings().find("section").stop().animate({left:0},500)
})
$(".xiala ul li").mouseleave(function () {
    $(".goutu").stop().hide(500)
    $(".shelter").stop().hide(500)
    $(".xiala ul li").css("border", "2px solid #fff")
    $(".xiala ul li section").stop().animate({left:0},500)
})
$(".hot-nav ul li").mouseover(function () {
    var index=$(this).index()
    $(".weiyi-in ul li").eq(index).show().siblings().hide()
    $(".hot-nav ul li").eq(index).css("backgroundColor", "#fa6176").siblings().css("backgroundColor", " #ffbfcf")
    $(".hot-nav ul li section").eq(index).find("span").css("color", "#fff").parent().parent().siblings().find("span").css("color", "#f3688b")
    $(".sanjiao").eq(index).show().parent().siblings().find(".sanjiao").hide()
    $(".hot-nav ul li section").eq(index).stop().animate({right:20},300).parent().siblings().find("section").stop().animate({right:0},300)

})
$(".h li").mouseover(function () {
    $(".h li div").eq($(this).index()).stop().slideDown(100).parent().siblings().find("div").stop().slideUp(100)
})
$(".h li div").mouseout(function () {
    $(this).stop().slideUp(100)
})

$(".fengge ul li").mouseover(function () {
    $(".l").eq($(this).index()).show().siblings().hide()
    $(".fengge ul li").eq($(this).index()).css("color", "#fa6176").siblings().css("color", "#333")
})


//�����ֲ�ͼ!!!!!!!!!!
var k1 = 0;
var timer = null
fn()
$("#kuai div").mouseover(function () {
    clearInterval(timer)
    k1 = $(this).index()
    fn1()
})

$(".banner").mouseover(function () {
    $(".sh").stop().show(1000)
    clearInterval(timer)
})
$(".banner").mouseout(function () {
    $(".sh").stop().hide(500)
    fn()
})
$(".sha2").click(function () {
    k1++
    if (k1 > $(".jianbian li").length - 1) {
        k1 = 0
    }
    fn1()

})
$(".sha").click(function () {
    k1--
    if (k1 < 0) {
        k1 = $(".jianbian li").length - 1
    }
    fn1()

})
function fn() {
    timer = setInterval(function () {
        k1++
        if (k1 > $(".jianbian li").length - 1) {
            k1 = 0
        }
        fn1()
    }, 2000)
}
function fn1() {
    $(".jianbian li").eq(k1).stop().fadeIn(800).siblings().stop().fadeOut(800)
    $("#kuai div").eq(k1).addClass("active").siblings().removeClass("active")
}


$("#zzzz li").mouseover(function () {
    $("#zzzz li img").eq($(this).index()).css("transform", "scale(1.4) rotateZ(10deg) translateZ(50px) rotateY(0deg)")
})
$("#zzzz li").mouseout(function () {
    $("#zzzz li img").css("transform", "scale(1) rotateZ(0) translateZ(0) rotateY(0)")
})

//����!!!!!!!!!!!!!!!
$(".hot-in:eq(0) div").mouseover(function () {
    fna($(".hot-in:eq(0) div .one"), $(".hot-in:eq(0) h4"))
})
$(".hot-in:eq(1) div").mouseover(function () {
    fna($(".hot-in:eq(1) div .one"), $(".hot-in:eq(1) h4"))
})
$(".hot-in:eq(2) div").mouseover(function () {
    fna($(".hot-in:eq(2) div .one"), $(".hot-in:eq(2) h4"))
})
$(".hot-in:eq(3) div").mouseover(function () {
    fna($(".hot-in:eq(3) div .one"), $(".hot-in:eq(3) h4"))
})
function fna(obj, h4) {
    obj.animate({left: -525}, 1000, "backIn")
        .next().animate({left: -525}, 1200, "backIn")
        .next().animate({left: -525}, 1400, "backIn")
        .next().animate({left: -525}, 1600, "backIn")
        .next().animate({left: -525}, 1800, "backIn", function () {
            h4.slideDown(800)
        })
}

//����!!
var topH = $(".top").outerHeight();
$(window).scroll(function () {
    var dis = $(window).scrollTop()
    //console.log(dis)
    //console.log(topH);
    if (dis >= topH) {
        $(".logo").addClass("fixed")
        $(".top").css("margin-bottom", "123px")
    } else {
        $(".logo").removeClass("fixed")
        $(".top").css("margin-bottom", "0px")
    }
})


//¥��
$(".loutili ul li").not(":last").click(function () {
    var index=$(this).index()
    //console.log(index)
    $(".loutili ul li").eq(index).addClass("lei1").siblings().not(":last").removeClass("lei1")
    var top = $(".louti").eq(index).offset().top-$(".logo").outerHeight();
    $("body,html").animate({
        scrollTop: top
    }, 300)
});
$(window).scroll(function () {
    var dis = $(window).scrollTop();
    if (dis >= 500) {
        $(".loutili").fadeIn(1000)
    } else {
        $(".loutili").fadeOut(1000)
    }
    $(".louti_con>.louti").each(function(i,ele){
        //console.log(ele);
        var index = $(ele).index()
        //console.log(index)
        if (dis <=$(ele).offset().top+$(".logo").outerHeight()) {
            $(".loutili ul li").removeClass("lei1");
            $(".loutili ul li").eq(index).addClass("lei1")
            return false
        }
    })
})
$(".loutili .last").click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
})

$(".zhuan1").mouseover(function () {
    $(".zhuan1").eq($(this).index()).css("transform", "rotateY(360deg) rotateX(360deg)").siblings().css("transform", "rotateY(0deg) rotateX(0deg)")
})
/**
 * Created by wanghan on 2017/10/10.
 */
