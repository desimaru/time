/**@type {HTMLBodyElement} */
const body = document.querySelector("body"),
    /**@type {HTMLHeadingElement} */
    h1 = document.querySelector("h1"),
    /**@type {HTMLInputElement[]} */
    [, local, year, ms, format, color, color2, number, rate] =
        document.getElementsByTagName("input");
local.checked = true;
color2.value = "#FFFFFF";
number.value = 80;
rate.value = 200;
(async function () {
    for (;;) {
        /**
         * 現在の時刻
         * @type {Date}
         */
        const DATE_TIME = new Date();
        /**
         * 表示する時間
         * @type {string}
         */
        let time = "";
        if (local.checked) {
            // 現地時間にチェックが入ってる時
            if (year.checked) {
                // `(年)/(月)/(日) (曜日)
                time = `${[
                    DATE_TIME.getFullYear(),
                    `0${DATE_TIME.getMonth() + 1}`.slice(-2),
                    `0${DATE_TIME.getDate()}`.slice(-2),
                ].join("/")} ${`${"日月火水木金土"[DATE_TIME.getDay()]}曜日`}`;
            }
            if (format.checked) {
                time += `0${DATE_TIME.toLocaleTimeString("ja")}`.slice(-8);
            } else {
                time += `${[
                    `0${DATE_TIME.getHours() % 12}`.slice(-2),
                    `0${DATE_TIME.getMinutes()}`.slice(-2),
                    `0${DATE_TIME.getSeconds()}`.slice(-2),
                ].join(":")}`;
            }
            if (ms.checked) {
                time += `.${`00${DATE_TIME.getMilliseconds()}`.slice(-3)}`;
            }
            if (!format.checked) {
                time += DATE_TIME.toLocaleTimeString("en").slice(-3);
            }
        } else {
            // 世界標準時にチェックが入ってる時
            if (year.checked) {
                // (年)/(月)/(日) (曜日)
                time += `${[
                    DATE_TIME.getUTCFullYear(),
                    `0${DATE_TIME.getUTCMonth() + 1}`.slice(-2),
                    `0${DATE_TIME.getUTCDate()}`.slice(-2),
                ].join("/")} ${"日月火水木金土"[DATE_TIME.getUTCDay()]}曜日 `;
            }
            if (format.checked) {
                // (時)/(分)/(秒)
                time += [
                    `0${DATE_TIME.getUTCHours()}`.slice(-2),
                    `0${DATE_TIME.getUTCMinutes()}`.slice(-2),
                    `0${DATE_TIME.getUTCSeconds()}`.slice(-2),
                ].join(":");
            } else {
                time += [
                    `0${DATE_TIME.getUTCHours() % 12}`.slice(-2),
                    `0${DATE_TIME.getUTCMinutes()}`.slice(-2),
                    `0${DATE_TIME.getSeconds()}`.slice(-2),
                ].join(":");
            }
            if (ms.checked) {
                time += `.${`00${DATE_TIME.getUTCMilliseconds()}`.slice(-3)}`;
            }
            if (!format.checked) {
                time += DATE_TIME.toLocaleTimeString("en").slice(-3);
            }
        }
        // h1に反映する
        h1.innerHTML = time;
        h1.style.fontSize = `${number.value}px`;
        // bodyのスタイルを変える
        body.style.color = color.value;
        body.style.backgroundColor = color2.value;
        await new Promise((resolve) =>
            setTimeout(
                () => resolve(),
                !Number.isNaN(Number(rate.value)) ? Number(rate.value) : 100
            )
        );
    }
})();
