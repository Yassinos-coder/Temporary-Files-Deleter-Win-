// Developped By Yassinos
var Delectron = require('electron');
require('electron');

function getIPFromAmazon() {
    fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => document.getElementById('myip').innerHTML = data)
}

function GetOs() {
    const os = require('os');
    var myhostname = String(os.hostname());
    document.getElementById('myhost').innerHTML = myhostname
}

function json(url) {
    return fetch(url).then(res => res.json());
}

function DelTemp() {
    const fs = require('fs');
    const path = require('path');
    fs.rm("C:/temp", { recursive: true, force: true }, (error) => {
        if (error) {
            console.log(error);
        }

    });
}

function DelTemp2() {
    const fs = require('fs');
    const path = require('path');
    var os = require('os');
    var username = String(os.userInfo().username)
    var path_temp = "C:/Users/" + username + "/AppData/Local/Temp"
    fs.rm(path_temp, { recursive: true, force: true }, (error) => {
        if (error) {
            console.log(error);
        }

    });
}

function DelPrefetch() {
    const fs = require('fs');
    const path = require('path');
    fs.rm("C:/Windows/Prefetch", { recursive: true, force: true }, (error) => {
        if (error) {
            console.log(error);
        }

    });
}

getIPFromAmazon();
GetOs();