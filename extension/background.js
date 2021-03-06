chrome.browserAction.setBadgeBackgroundColor({"color": [0,0,0,255]});

function pad(s, n) {
    s = '' + s;
    while(s.length < n) {
        s = '0' + s;
    }
    return s;
}

function updateTime() {
    dateobj = new Date();

    year = pad(dateobj.getFullYear(), 4);
    month = pad(dateobj.getMonth(), 2);
    day = pad(dateobj.getDate(), 2);
    hour = pad(dateobj.getHours(), 2);
    minute = pad(dateobj.getMinutes(), 2);

    badge = hour + ':' + minute;
    title = day + '/' + month + '/' + year + ' ' + badge;
    chrome.browserAction.setBadgeText({"text": badge});
    chrome.browserAction.setTitle({"title": title});

    var t = setTimeout("updateTime()", 10000);
}

updateTime();
