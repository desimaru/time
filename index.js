document.querySelector("#local").checked = true;
    const time = new Date(),
        h1 = document.querySelector("h1");
    let time2 = "",
        a = "";
setInterval(() => {
    if (document.querySelector("#local").checked) {
        if (document.querySelector("#year").checked) {
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
            }
            time2 += `${time.toLocaleDateString()} ${a} `;
        }else{
            h1.style.fontSize="100px";
        }
        time2 += time.toLocaleTimeString("ja");
        if (document.querySelector("#ms").checked) {
            time2 += `.${`00${time.getMilliseconds()}`.slice(-3)}`;
        }
        h1.innerHTML = time2;
    } else if (document.querySelector("#utc").checked) {
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
        }
        if (document.querySelector("#year").checked) {
            time2 += `${time.getUTCFullYear()}/${`0${
                time.getUTCMonth() + 1
            }`.slice(-2)}/${`0${time.getUTCDate()}`.slice(-2)} ${a} `;
        }
        time2 += `${`0${time.getUTCHours()}`.slice(
            -2
        )}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
        if (document.querySelector("#ms").checked) {
            time2 += `.${`00${time.getUTCMilliseconds()}`.slice(-3)}`;
        }
        h1.innerHTML = time2;
    }
});
