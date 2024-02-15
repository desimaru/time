/**@type {HTMLBodyElement} */
const body = document.querySelector("body"),
    /**@type {HTMLHeadingElement} */
    h1 = document.querySelector("h1"),
    /**@type {HTMLFormElement} */
    local = document.getElementById("local"),
    utc = document.getElementById("utc"),
    year = document.getElementById("year"),
    ms = document.getElementById("ms"),
    color = document.getElementById("color"),
    color2 = document.getElementById("color2"),
    number = document.getElementById("number");
/**
 * 表示する時間
 * @type {String}
*/
let time2 = "",
    /**
     * 曜日
     * @type {String}
     */
    a = "";
local.checked = true;
color2.value = "#FFFFFF";
number.value = 80;
setInterval(() => {
    /**
     * 現在の時刻
     * @type {Date}
     */
    const time = new Date();
    time2 = "";
    if (local.checked) {
        // 現地時間にチェックが入ってる時
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
            time2 += `${time.getFullYear()
                }/${`0${time.getMonth() + 1}`.slice(-2)}/${`0${time.getDate()}`.slice(-2)} ${a} `;
        };
        time2 += time.toLocaleTimeString("ja");
        if (ms.checked) {
            time2 += `.${`00${time.getMilliseconds()}`.slice(-3)}`;
        };
    } else if (utc.checked) {
        // 世界標準時にチェックが入ってる時
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
            time2 += `${time.getUTCFullYear()}/${`0${time.getUTCMonth() + 1
                }`.slice(-2)}/${`0${time.getUTCDate()}`.slice(-2)} ${a} `;
        };
        time2 += `${`0${time.getUTCHours()}`.slice(
            -2
        )}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
        if (ms.checked) {
            time2 += `.${`00${time.getUTCMilliseconds()}`.slice(-3)}`;
        };
    }
    // h1に反映する
    h1.innerHTML = time2;
    h1.style.fontSize = `${number.value}px`;
    // bodyのスタイルを変える
    body.style.color = color.value;
    body.style.backgroundColor = color2.value;
});