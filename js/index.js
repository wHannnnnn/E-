/**
 * Created by wanghan on 2017/10/9.
 */
var azz = $("#zz")
var asp = $("span", azz)[0]
var adizhi = document.getElementsByClassName("dizhi")[0]
var acon = $("#con")
var aconli = $("li", acon)
var aa = $("#a")
var quanbu = document.getElementsByClassName("quanbu")
var alia = $("a", quanbu[0])
var alia1 = $("a", quanbu[1])
azz.onmouseover = function () {
    adizhi.style.display = "block";
    asp.style.transform = "rotate(180deg)";
}
azz.onmouseout = function () {
    adizhi.style.display = "none"
    asp.style.transform = "rotate(0deg)"
}
adizhi.onmouseover = function () {
    adizhi.style.display = "block"
    asp.style.transform = "rotate(180deg)"
}
adizhi.onmouseout = function () {
    adizhi.style.display = "none"
    asp.style.transform = "rotate(0deg)"
}
aconli[0].style.backgroundColor = "#fff"
for (var i = 0; i < aconli.length; i++) {
    aconli[i].index = i
    aconli[i].onclick = function () {
        for (var i = 0; i < quanbu.length; i++) {
            quanbu[i].style.display = "none"
            aconli[i].style.backgroundColor = "#f6f6f6"
        }
        quanbu[this.index].style.display = "block"
        aconli[this.index].style.backgroundColor = "#fff"
//            aa.innerHTML = aconli[this.index].innerHTML
    }
}
alia[18].style.backgroundColor = "#fb6003"
for (var i = 0; i < alia.length; i++) {
    alia[i].in = i
    alia[i].onclick = function () {
        for (var i = 0; i < alia.length; i++) {
            alia[i].style.backgroundColor = ""
        }
        aconli[0].innerHTML = alia[this.in].innerHTML
        aa.innerHTML = alia[this.in].innerHTML
        alia[this.in].style.backgroundColor = "#fb6003"
    }
}
alia1[1].style.backgroundColor = "#fb6003"
for (var i = 0; i < alia1.length; i++) {
    alia1[i].in = i
    alia1[i].onclick = function () {
        for (var i = 0; i < alia1.length; i++) {
            alia1[i].style.backgroundColor = ""
        }
        aconli[1].innerHTML = alia1[this.in].innerHTML
//            aa.innerHTML = alia1[this.in].innerHTML
        alia1[this.in].style.backgroundColor = "#fb6003"
    }
}

var aff = $("#ff")
var affli = $("li", aff)
for (var i = 0; i < affli.length; i++) {
    affli[i].index = i
    affli[i].onmouseover = function () {
        for (var i = 0; i < affli.length; i++) {
            startMove(affli[i], {
                width: 130
            }, 9)
        }
        startMove(affli[this.index], {
            width: 920
        }, 9)
    }
}
//ÎÞ·ìÂÖ²¥£¡£¡£¡£¡£¡£¡£¡£¡£¡£¡£¡£¡£¡£¡
(function(){
    var aScreen = $("#screen")
var aUl = $("#ul")
var aaLi = $("li", $("ol")[0])
var aLi = $("li", aUl)
var arr = $("#arr")
var aLeft = $("#left")
var aright = $("#right")
var timerx = null
var imgW = aLi[0].offsetWidth
var kx = 1
var anewLi1 = aLi[0].cloneNode(true)
var anewLi2 = aLi[3].cloneNode(true)
aUl.appendChild(anewLi1)
aUl.insertBefore(anewLi2, first(aUl))
aUl.style.left = -imgW * kx + "px"
aaLi[0].className = "current"
timerx = setInterval(fz, 3000)
aScreen.onmouseover = function () {
    arr.style.display = "block"
    clearInterval(timerx)
}
aScreen.onmouseout = function () {
    arr.style.display = "none"
    timerx = setInterval(fz, 3000)
}
aright.onclick = function () {
    kx++
    if (kx >= aLi.length) {
        kx = 1
        aUl.style.left = -imgW * kx + "px"
    }
    startMove(aUl, {
        left: -imgW * kx
    }, 6, function () {
        if (kx >= aLi.length - 1) {
            kx = 1
            aUl.style.left = -imgW * kx + "px"
        }
        fnx()
    })
}
aLeft.onclick = function () {
    kx--
    if (kx < 0) {
        kx = aLi.length - 2
        aUl.style.left = -imgW * kx + "px"
    }
    startMove(aUl, {
        left: -imgW * kx
    }, 6, function () {
        if (kx <= 0) {
            kx = aLi.length - 2
            aUl.style.left = -imgW * kx + "px"
        }
        fnx()
    })
}
for (var i = 0; i < aaLi.length; i++) {
    aaLi[i].index = i
    aaLi[i].onmouseover = function () {
        kx = this.index + 1
        startMove(aUl, {
            left: -imgW * kx
        }, 10)
        fnx()
    }
}
function fz() {

    kx++
    if (kx >= aLi.length) {
        kx = 1
        aUl.style.left = -imgW * kx + "px"
    }

    startMove(aUl, {
        left: -imgW * kx
    }, 10, function () {
        if (kx >= aLi.length - 1) {
            kx = 1
            aUl.style.left = -imgW * kx + "px"
        }
        fnx()
    })
}
function fnx() {
    for (var i = 0; i < aaLi.length; i++) {
        aaLi[i].className = ""
    }
    aaLi[kx - 1].className = "current"
}
})()



var xinkuan = document.getElementsByClassName("xinkuan")
var tan1 = document.getElementsByClassName("tan1")
for (var i = 0; i < xinkuan.length; i++) {
    tan1[i].style.transform = "scale(0) rotateZ(0deg) translateZ(0px) rotateY(0deg)"
}
for (var i = 0; i < xinkuan.length; i++) {
    xinkuan[i].index = i
    xinkuan[i].onmouseover = function () {
        for (var i = 0; i < tan1.length; i++) {
            tan1[i].style.transform = "scale(0) rotateZ(0deg) translateZ(0px) rotateY(0deg)"
        }
        tan1[this.index].style.transform = "scale(1) rotateZ(0deg) translateZ(0px) rotateY(360deg)"
    }
}

for (var i = 0; i < xinkuan.length; i++) {
    xinkuan[i].onmouseout = function () {
        for (var i = 0; i < tan1.length; i++) {
            tan1[i].style.transform = "scale(0) rotateZ(0deg) translateZ(0px) rotateY(0deg)"
        }
    }
}
(function(){
    var top1 = $('#top1')
    var top2 = $('#top2')
    var zzzz = $("#zzzz")
    top2.onclick = function () {
        move(zzzz, "top", 10, -315)
    }
    top1.onclick = function () {
        move(zzzz, "top", 10, 30)
    }

})()
