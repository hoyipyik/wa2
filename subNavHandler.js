/* 二级菜单的处理函数 */
//判断是否已经打开了二级菜单的参数
var flag = true
function showSubnav(){
    // var flag = true
    // console.log(flag)
    //定义二级菜单的变量
    var subnav = '<ul id="sub-nav-ul">\
    <li>\
        <a class="nonhome" target="_blank" href="https://en.wikipedia.org/wiki/White_Album_2">Wikipedia</a>\
    </li>\
    <li>\
        <a class="nonhome" href="./about.html">About</a>\
    </li>\
    <li>\
        <a class="nonhome" href="./donate.html">Donate</a>\
    </li>\
    </ul>';
    var br = "<br><br><br>"
    
    if(flag){
        //更改文字内容
        document.getElementById('more').innerHTML = "Hide"
        //在id为sub-nav的<nav>中间添加子菜单的html代码
        document.getElementById("sub-nav").innerHTML = subnav
        //增加空格
        document.getElementById("br").innerHTML = br
        //更新状态
        flag = !flag
    }else{
        //收起二级菜单的代码
        document.getElementById('more').innerHTML = "More"
        document.getElementById("sub-nav").innerHTML = null
        document.getElementById("br").innerHTML = null
        flag = !flag
    }
    
}       