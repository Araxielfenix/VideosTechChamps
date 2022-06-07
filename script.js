//hide videosShopify on load
window.onload = function () {
    document.getElementById("videosShopify").style.display = "none";
    document.getElementById("videosWC").style.display = "none";
    document.getElementById("videosPS").style.display = "none";
    document.getElementById("videosLeft").style.display = "none";
}

function showShopifyVideos() {
    if(document.getElementById("videosShopify").style.display == "none" && document.getElementById("videosLeft").style.display == "none"){
        document.getElementById("videosShopify").style.display = "grid";
        document.getElementById("videosWC").style.display = "none";
        document.getElementById("videosPS").style.display = "none";

        document.getElementById("videosLeft").style.display = "grid";
        document.getElementById("videosCenter").style.display = "none";
    }
    else if (document.getElementById("videosShopify").style.display == "grid" && document.getElementById("videosLeft").style.display == "grid"){
        document.getElementById("videosShopify").style.display = "none";

        document.getElementById("videosLeft").style.display = "none";
        document.getElementById("videosCenter").style.display = "grid";
    }
}
function showWCVideos() {
    if(document.getElementById("videosWC").style.display == "none" && document.getElementById("videosLeft").style.display == "none"){
        document.getElementById("videosShopify").style.display = "none";
        document.getElementById("videosWC").style.display = "grid";
        document.getElementById("videosPS").style.display = "none";

        document.getElementById("videosLeft").style.display = "grid";
        document.getElementById("videosCenter").style.display = "none";
    }
    else if (document.getElementById("videosWC").style.display == "grid" && document.getElementById("videosLeft").style.display == "grid"){
        document.getElementById("videosWC").style.display = "none";

        document.getElementById("videosLeft").style.display = "none";
        document.getElementById("videosCenter").style.display = "grid";
    }
}
function showPSVideos(){
    if(document.getElementById("videosPS").style.display == "none" && document.getElementById("videosLeft").style.display == "none"){
        document.getElementById("videosShopify").style.display = "none";
        document.getElementById("videosWC").style.display = "none";
        document.getElementById("videosPS").style.display = "grid";

        document.getElementById("videosLeft").style.display = "grid";
        document.getElementById("videosCenter").style.display = "none";
    }
    else if (document.getElementById("videosPS").style.display == "grid" && document.getElementById("videosLeft").style.display == "grid"){
        document.getElementById("videosPS").style.display = "none";

        document.getElementById("videosLeft").style.display = "none";
        document.getElementById("videosCenter").style.display = "grid";
    }
}

//copy to clipboard input value.
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
}