
(function () {

    var myCan = document.getElementById('myCan');
    var ctx = myCan.getContext('2d');
    var timer = null;
    
    function drawBg () {
        var grd = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
        grd.addColorStop(0, '#03303a')
        grd.addColorStop(1, '#000')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 500, 500)
    }
    
    // 渲染时间
    function renderTime() {
        ctx.clearRect(0, 0, 500, 500)
        drawBg()
        // 获取时间
        var date = new Date()
        var today = date.toDateString()
        var h = date.getHours()
        var m = date.getMinutes()
        var s = date.getSeconds()
        var ms = date.getMilliseconds()
        // 让时间变的顺滑
        var sliderS = s + ms / 1000 
        var sliderM = m + sliderS / 60

        // 画时间弧
        var hDeg = h * 360 / 12;
        draw(200, hDeg)

        // 分钟弧
        var mDeg = sliderM * 360 / 60
        draw(170, mDeg)

        // 秒钟弧度
        var sDeg = sliderS * 360 / 60
        draw(140, sDeg)

        // 渲染文字
        ctx.beginPath()
        ctx.font = '25px Arial'
        ctx.fillStyle = '#00ffff'
        ctx.shadowBlur = 0
        ctx.fillText(today, 150, 250)
        ctx.fillText(formatTime(h) + ':' + formatTime(m) + ':' + formatTime(s) + ':' + ms ,  175, 300)

    }

    // 画弧
    function draw (r, endDeg) {
        ctx.beginPath()
        ctx.strokeStyle = '#00ffff'
        ctx.lineWidth = 15
        ctx.shadowBlur = 5
        ctx.shadowColor = '#00ffff'
        ctx.arc(250, 250, r, angleVariation(270) , angleVariation(endDeg - 90), 0) 
        ctx.stroke()
    }

    // 角度变弧度
    function angleVariation (deg) {
        return deg * Math.PI / 180
    }

    // 调整时间格式
    function formatTime (time) {
        time = '0' + time
        return time.slice(-2);
    }

    timer = setInterval(renderTime, 40)
   

})()