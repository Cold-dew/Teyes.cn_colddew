if (app.ispc() || app.GetQueryString('pc')) {
    // window.location.href='http://teyes.cn/'
} else {
    // window.location.href="http://420.teyes.cn"
}

$(function() {

    document.getElementById('banner').style.height = (window.window.innerWidth / 1.777) + 'px';

    $(window).resize(function() {
        document.getElementById('banner').style.height = (window.window.innerWidth / 1.777) + 'px';
    });


    app.home = function() {

        var height = $(window).height();
        var width = $(window).width();





        $(".cc2").on('click', function() {
            console.log(123);

            $(".cc2-mask").show()
        })

        $(".contact").on('click', function() {
            $(".contact-mask").show()
        })


        $(".video-content span").on('click', function() {
                $(".mask .video-content .play").fadeOut();
                document.getElementById('videoplay').play();
                document.getElementById('videoplay').controls = true;
            })
            // 视频点
        $(document).on('click', "#video", function() {
            document.getElementById('videoplay').load();

            document.getElementById('videoplay').src = "http://4703.vod.myqcloud.com/4703_7db96f50ee8d11e5b264c14962ff10db.f30.mp4";
            document.getElementById('videoplay').poster = "images/home/4.jpg"
            window.scrollTo(0, 0);
            if (app.ispc()) {
                $('body,html').css('overflow', 'hidden')
            }

            $(".video-mask").fadeIn();
        })
        $(document).on('click', ".close", function() {
            $(".mask").fadeOut();

            document.getElementById('videoplay').pause()
        })

        $(".mask").on("click", function(e) {
            var target = $(e.target);
            if (target.closest(".content").length == 0) {
                $(".mask").fadeOut();
                document.getElementById('videoplay').pause()
            }
        })

        $("img.pc").on('click', function() {
            document.getElementById('videoplay').load();
            document.getElementById('videoplay').src = "http://1251445182.vod2.myqcloud.com/483a0068vodtransgzp1251445182/e08504355285890786861812183/v.f30.mp4",
                document.getElementById('videoplay').poster = "images/home/2vvv3.png"
            $(".video-content span").click();
            window.scrollTo(0, 0);
            if (app.ispc()) {
                $('body,html').css('overflow', 'hidden')
            }
            $(".video-mask").fadeIn();
        })

        $(".content-home .pic-list #video1").on('click', function() {
            document.getElementById('videoplay').load();
            document.getElementById('videoplay').src = "http://4703.vod.myqcloud.com/4703_624b886cfef911e59e484de6e05a501b.f30.mp4",
                document.getElementById('videoplay').poster = "images/home/v1.jpg"
            $(".video-content span").click();
            window.scrollTo(0, 0);
            if (app.ispc()) {
                $('body,html').css('overflow', 'hidden')
            }
            $(".video-mask").fadeIn();
        })


        $(".content-home .pic-list #video2").on('click', function() {
            document.getElementById('videoplay').load();
            document.getElementById('videoplay').src = "http://4703.vod.myqcloud.com/4703_7605508e033311e6a8c3976cadb1b427.f30.mp4",
                document.getElementById('videoplay').poster = "images/home/v2.jpg"
            $(".video-content span").click();
            window.scrollTo(0, 0);
            if (app.ispc()) {
                $('body,html').css('overflow', 'hidden')
            }
            $(".video-mask").fadeIn();
        })


        $(".content-home .pic-list #video3").on('click', function() {
            document.getElementById('videoplay').load();
            document.getElementById('videoplay').src = "http://4703.vod.myqcloud.com/4703_4ff4ed7c06e511e6afd413f3e40bdb40.f30.mp4",
                document.getElementById('videoplay').poster = "images/home/v3.jpg"
            $(".video-content span").click();
            window.scrollTo(0, 0);
            if (app.ispc()) {
                $('body,html').css('overflow', 'hidden')
            }
            $(".video-mask").fadeIn();
        })



        // 轮播
        var bodySwiper = new Swiper("#mainBody", {


        })



    }
    app.home()



})