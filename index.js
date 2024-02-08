const body = document.querySelector("body"),
    h1 = document.querySelector("h1"),
    local = document.getElementById("local"),
    utc = document.getElementById("utc"),
    year = document.getElementById("year"),
    ms = document.getElementById("ms"),
    color = document.getElementById("color"),
    color2 = document.getElementById("color2"),
    number = document.getElementById("number");
let time2 = "",
    a = "";
local.checked = true;
document.getElementById("color2").value = "#FFFFFF";
setInterval(() => {
    const time = new Date();
    time2 = "";
    if (local.checked) {
        if (year.checked) {
            a = "";
            switch (time.getDay()) {
                case 0:
                    a = "日曜日";
                    break;
                case 1:
                    a = "月曜日";
                    break;
                case 2:
                    a = "火曜日";
                    break;
                case 3:
                    a = "水曜日";
                    break;
                case 4:
                    a = "木曜日";
                    break;
                case 5:
                    a = "金曜日";
                    break;
                case 6:
                    a = "土曜日";
            };
            time2 += time.toLocaleDateString() + a;
        };
        time2 += time.toLocaleTimeString("ja");
        if (ms.checked) {
            time2 += `.${`00${time.getMilliseconds()}`.slice(-3)}`;
        };
    } else if (utc.checked) {
        a = "";
        switch (time.getUTCDay()) {
            case 0:
                a = "日曜日";
                break;
            case 1:
                a = "月曜日";
                break;
            case 2:
                a = "火曜日";
                break;
            case 3:
                a = "水曜日";
                break;
            case 4:
                a = "木曜日";
                break;
            case 5:
                a = "金曜日";
                break;
            case 6:
                a = "土曜日";
        };
        if (year.checked) {
            time2 += `${time.getUTCFullYear()}/${`0${
                time.getUTCMonth() + 1
            }`.slice(-2)}/${`0${time.getUTCDate()}`.slice(-2)} ${a} `;
        };
        time2 += `${`0${time.getUTCHours()}`.slice(
            -2
        )}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
        if (ms.checked) {
            time2 += `.${`00${time.getUTCMilliseconds()}`.slice(-3)}`;
        };
    }
    h1.innerHTML = time2;
    body.style.color = color.value;
    body.style.backgroundColor = color2.value;
    h1.style.fontSize = number.value;
});