var flag = true

function showSubnav(){
    // var flag = true
    // console.log(flag)
    var subnav = '<ul id="sub-nav-ul">\
    <li>\
        <a class="nonhome" target="_blank" href="https://en.wikipedia.org/wiki/White_Album_2">Wikipedia</a>\
    </li>\
    <li>\
        <a class="nonhome" target="_blank" href="https://www.imdb.com/title/tt2942224/">IMDb</a>\
    </li>\
    <li>\
        <a class="nonhome" href="./donate.html">Donate</a>\
    </li>\
    </ul>';
    var br = "<br><br><br>"
    if(flag){
        document.getElementById('more').innerHTML = "Hide"
        document.getElementById("sub-nav").innerHTML = subnav
        document.getElementById("br").innerHTML = br
        flag = !flag
    }else{
        document.getElementById('more').innerHTML = "More"
        document.getElementById("sub-nav").innerHTML = null
        document.getElementById("br").innerHTML = null
        flag = !flag
    }
    
}       