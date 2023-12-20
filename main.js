// -*- coding: utf-8 -*-
//  @name   : Decrypt-Game
//  @author : hkyang233 
//  @date   : 2023/12/20
//  @Licence: MIT

async function test(name, date) {
    // 预设的 SHA-256 哈希密码的 hex 字符串，使用真实密码替换
    var correctHashedPasswd = "期待的哈希值"; // 请使用您希望匹配的密码的SHA-256哈希值替换此处
    var keyElement = document.getElementById('key');
    if (!keyElement) {
        console.error('Key element not found');
        return;
    }
    var key = keyElement.value;

    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(key);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer)); 
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        if (hashHex === correctHashedPasswd) {
            let Days = date;
            let exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(hashHex) + ";expires=" + exp.toGMTString() + ";path=/";
            document.getElementById("ok").innerHTML = "<button>Next</button>";
        } else {
            alert("key错误");
        }
    } catch (e) {
        console.error('Hashing failed', e);
    }
}
