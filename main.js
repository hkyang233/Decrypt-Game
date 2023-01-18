// -*- coding: utf-8 -*-
//  @name   : Decrypt-Game
//  @author : hkyang233 
//  @date   : 2022/8/14
//  @Licence: MIT

window.onload = function(){
  const md5 = document.createElement("script");
  md5.setAttribute('type','text/javascript');
  md5.setAttribute("src","./md5.js");
  document.getElementsByTagName('head')[0].appendChild(md5);
}

function test(name, date) {
    var passwd = "c4d038b4bed09fdb1471ef51ec3a32cd";
    var name ="Checkvalue";
    var key = document.getElementById('#key').value;
    var keymd5=md5(key);
    if (keymd5 == passwd) {
        let Days = date;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(passwd) + ";expires=" + exp.toGMTString();
        document.getElementById("ok").innerHTML = "<button>Next</button>";
    }
    else {
        alert("key错误");
    }
}