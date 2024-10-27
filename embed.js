//lyricsproject / last update 16-4-22
//reworked to embed.js / 26-10-24

const css = elmnts => document.head.appendChild(document.createElement("style")).innerHTML = elmnts;
css(`
    .single {
        position: relative;
        display: inline-block;
    }
    .single img {
        display: block;
    }
    .overlay {
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        pointer-events: none;
    }
    .single iframe {
        width: 320px;
        height: 180px;
    }
    .playlist iframe {
        width: 320px;
        height: 180px;
    }
`);

function embd(e) {
    var n = document.createElement("iframe");
    n.setAttribute("src", "//youtube.com/embed/" + e.dataset.id + "?rel=0&showinfo=0&autohide=1&modestbranding=1");
    n.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    n.setAttribute("frameborder", "0");
    n.setAttribute("allowfullscreen", "");
    e.parentNode.replaceChild(n, e);
}

function _embd() {
    for (var e = document.getElementsByClassName("single"), n = 0; n < e.length; n++) {
        var i = e[n].dataset.id,
            t = document.createElement("a");
        t.setAttribute("data-id", i);
        
        var a = document.createElement("img");
        a.src = "https://i.ytimg.com/vi_webp/" + i + "/mqdefault.webp".replace("ID", i);
        
        var overlay = document.createElement("img");
        overlay.src = "https://files.catbox.moe/bpym23.svg";
        overlay.classList.add("overlay");
        
        t.appendChild(a);
        t.appendChild(overlay);

        var d = document.createElement("a");
        d.setAttribute("class", "d"),
        t.appendChild(d);
        
        t.onclick = function () {
            embd(this);
        },
        e[n].appendChild(t);
    }
}

document.addEventListener("DOMContentLoaded", _embd);

function embdpl(e) {
    var n = document.createElement("iframe");
    n.setAttribute("src", "//youtube.com/embed/videoseries?list=" + e.dataset.id + "&rel=0&showinfo=0&autohide=1&modestbranding=1");
    n.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    n.setAttribute("frameborder", "0");
    n.setAttribute("allowfullscreen", "");
    e.parentNode.replaceChild(n, e);
}

function _pl() {
    for (var e = document.getElementsByClassName("playlist"), n = 0; n < e.length; n++) {
        var i = e[n].dataset.id,
            t = document.createElement("pl");
        t.setAttribute("data-id", i);
        
        var a = document.createElement("img");
        a.src = "https://files.catbox.moe/bpym23.svg";
        t.appendChild(a);
        
        var d = document.createElement("pl");
        d.setAttribute("class", "_"),
        t.appendChild(d);
        
        t.onclick = function () {
            embdpl(this);
        },
        e[n].appendChild(t);
    }
}

document.addEventListener("DOMContentLoaded", _pl);
