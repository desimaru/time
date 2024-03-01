/**@type {HTMLBodyElement} */
const body = document.querySelector("body"),
    /**@type {HTMLHeadingElement} */
    h1 = document.querySelector("h1"),
    /**@type {HTMLInputElement} */
    [local, utc, year, ms, color, color2, number] = document.getElementsByTagName("input");
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
/**
 * 曜日判別
 * @param {number} date [1-6]
 * @returns {string} 曜日
 */
function day(date) {
    switch (date) {
        case 0:
            return "日曜日";
        case 1:
            return "月曜日";
        case 2:
            return "火曜日";
        case 3:
            return "水曜日";
        case 4:
            return "木曜日";
        case 5:
            return "金曜日";
        case 6:
            return "土曜日";
    }
}
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
            a = day(time.getDay());
            // `(年)/(月)/(日) (曜日)
            time2 += `${time.getFullYear()}/${`0${time.getMonth() + 1}`.slice(
                -2
            )}/${`0${time.getDate()}`.slice(-2)} ${a} `;
        }
        time2 += time.toLocaleTimeString();
        if (ms.checked) {
            time2 += `.${`00${time.getMilliseconds()}`.slice(-3)}`;
        }
    } else if (utc.checked) {
        // 世界標準時にチェックが入ってる時
        a = day(time.getUTCDay());
        if (year.checked) {
            time2 += `${time.getUTCFullYear()}/${`0${time.getUTCMonth() + 1
                }`.slice(-2)}/${`0${time.getUTCDate()}`.slice(-2)} ${a} `;
        }
        // `(年)/(月)/(日) (曜日)
        time2 += `${`0${time.getUTCHours()}`.slice(
            -2
        )}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
        if (ms.checked) {
            time2 += `.${`00${time.getUTCMilliseconds()}`.slice(-3)}`;
        }
    }
    // h1に反映する
    h1.innerHTML = time2;
    h1.style.fontSize = `${number.value}px`;
    // bodyのスタイルを変える
    body.style.color = color.value;
    body.style.backgroundColor = color2.value;
});
