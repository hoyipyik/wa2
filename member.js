var xmlHttp;
        function createXMLHttpRequest(){
            if(window.ActiveXObject){
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }else if(window.XMLHttpRequest){
                    xmlHttp = new XMLHttpRequest();
            }
        }

        function sendRequest(){
            // console.log("This is Submit")
            createXMLHttpRequest();
            try{ xmlHttp.onreadystatechange = handleStateChange;
                var name= document.getElementById("name").value;
				var username = document.getElementById("username").value;
                // console.log(, "Item to send")
                var orgurl = "memberHandle.jsp?name="+name+"&username="+username;  //参数是content，参数值是chinaa字符串变量中的字符串，其中包含中文。
                //如果有多个参数的格式 参数之间用&号分割和连接 var orgurl = "args.jsp?content="+chinaa+"&"+"para2"+para2value; 
                var codedurl = encodeURI(orgurl);	//js自带函数 编码2次
                codedurl = encodeURI(codedurl);
                xmlHttp.open("get", codedurl, true);
                xmlHttp.send(null);
                console.log(xmlHttp);
            }catch(exception){
                alert("您要访问的资源不存在!");
            }
        }

        function handleStateChange(){
			// console.log(xmlHttp)
            if(xmlHttp.readyState == 4){
				console.log("Back")
                if (xmlHttp.status == 200 || xmlHttp.status == 0){// 显示返回结果
                    var backHolder = xmlHttp.responseText;
                    console.log(backHolder, "responseText")
                    window.alert("Your email "+backHolder+" has been registed :)");
                }
            }
        }