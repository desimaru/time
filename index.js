{
/**@type {HTMLBodyElement} */
const body = document.querySelector("body"),
    /**@type {HTMLHeadingElement} */
    h1 = document.querySelector("h1"),
    /**@type {HTMLInputElement[]} */
    [utc, local, year, ms, color, color2, number] =
        document.getElementsByTagName("input");
/**
 * 表示する時間
 * @type {string}
 */
let time2 = "",
    /**
     * 曜日
     * @type {string}
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
            // `(年)/(月)/(日) (曜日)
            time2 += `${time.getFullYear()}/${`0${time.getMonth() + 1}`.slice(
                -2
            )}/${`0${time.getDate()}`.slice(-2)} ${"日月火水木金土"[time.getDay()]}曜日 `;
        }
        time2 += time.toLocaleTimeString("ja");
        if (ms.checked) {
            time2 += `.${`00${time.getMilliseconds()}`.slice(-3)}`;
        }
    } else if (utc.checked) {
        // 世界標準時にチェックが入ってる時
        if (year.checked) {
           // (年)/(月)/(日) (曜日)
            time2 += `${time.getUTCFullYear()}/${`0${
                time.getUTCMonth() + 1
            }`.slice(-2)}/${`0${time.getUTCDate()}`.slice(-2)} ${"日月火水木金土"[time.getUTCDay()]}曜日 `;
        }
        // (時)/(分)/(秒)
        time2 += `${`0${time.getUTCHours()}`.slice(
            -2
        )}:${`0${time.getUTCMinutes()}`.slice(
            -2
        )}:${`0${time.getUTCSeconds()}`.slice(-2)}`;
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
}
