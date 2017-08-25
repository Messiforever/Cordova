(function () {

    var topBu = document.querySelector('.top');
    topBu.addEventListener('click',function () {
        // document.querySelector('html, body').animate({scrollTop: 0}, 500);
        //  document.body.scrollTop=0;
        // var time = setInterval(function () {
        //     document.body.scrollTop = document.body.scrollTop - 120;
        //     if (document.body.scrollTop === 0) {
        //         clearInterval(time);
        //     }
        // }, 1);
        // document.querySelector(".scroll").style.transform = "none"

    });

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.splashscreen.hide();
    }
})();