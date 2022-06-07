//hide videosShopify on load
window.onload = function () {
    document.getElementById("videosShopify").style.display = "none";
    document.getElementById("videosWC").style.display = "none";
    document.getElementById("videosPS").style.display = "none";
}

function showShopifyVideos() {
    if(document.getElementById("videosShopify").style.display == "none"){
        document.getElementById("videosShopify").style.display = "block";
    }
    else if (document.getElementById("videosShopify").style.display == "block"){
        document.getElementById("videosShopify").style.display = "none";
    }
}

function showWCVideos() {
    if(document.getElementById("videosWC").style.display == "none"){
        document.getElementById("videosWC").style.display = "block";
    }
    else if (document.getElementById("videosWC").style.display == "block"){
        document.getElementById("videosWC").style.display = "none";
    }
}
function shopPSVideos(){
    if(document.getElementById("videosPS").style.display == "none"){
        document.getElementById("videosPS").style.display = "block";
    }
    else if (document.getElementById("videosPS").style.display == "block"){
        document.getElementById("videosPS").style.display = "none";
    }
}