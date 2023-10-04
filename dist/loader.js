function playclip() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7") != -1) || (navigator.appVersion.indexOf("MSIE 8") != -1)) {
        if (document.all) {
            document.all.sound.src = "song.mp3";
        }
    } else {
        {
            var audio = document.getElementsByTagName("audio");

            if (audio.length > 0) audio[0].play();

            var video = document.getElementsByTagName("video");

            if (video.length > 0) {
                video = video[0];
                video.removeAttribute('hidden');
                video.play();
            }
        }
    }
}

document.querySelector('.song').addEventListener('click', function() {

    playclip();
});

$(document).ready(function() {
    $(document.body).click(function() {
        $(".clickanywhere").fadeOut(1000);
        $(".biolink").fadeIn(1000);

        let play = function() {
            document.getElementById("audio").play()
        }

    });
});

var _old = jQuery.Event.prototype.stopPropagation;

jQuery.Event.prototype.stopPropagation = function() {
    this.target.nodeName !== 'SPAN' && _old.apply(this, arguments);
};