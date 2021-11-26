var xmlHttp;
function createXMLHttpRequest(){
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
    }
}

function startRequest(){
    console.log("This is Submit")
    createXMLHttpRequest();
    try{ xmlHttp.onreadystatechange = handleStateChange;
        var email= document.getElementById("input-holder").value;
        console.log(email, "Item to send")
        var orgurl = "emailHandle.jsp?content="+email;  //参数是content，参数值是chinaa字符串变量中的字符串，其中包含中文。
        //如果有多个参数的格式 参数之间用&号分割和连接 var orgurl = "args.jsp?content="+chinaa+"&"+"para2"+para2value; 
        var codedurl = encodeURI(orgurl);	//js自带函数 编码2次
        codedurl = encodeURI(codedurl);
        xmlHttp.open("get", codedurl, true);
        xmlHttp.send(null);
    }catch(exception){
        alert("您要访问的资源不存在!");
    }
}

function handleStateChange(){
    if(xmlHttp.readyState == 4){
        if (xmlHttp.status == 200 || xmlHttp.status == 0){// 显示返回结果
            var backHolder = xmlHttp.responseText;
            console.log(backHolder, "responseText")
            window.alert("Your email "+backHolder+" has been registed :)");
        }
    }
}

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