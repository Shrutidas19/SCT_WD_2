let hour;
let minute;
let seconds;
let interval;

let getSeconds = 0; 
let getMinutes = 0;
let getHours = 0;

function stopwatch() {
    this.start = function() {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        seconds = document.getElementById("seconds");

        interval = setInterval(() => {
            getSeconds++;
            if (getSeconds < 10) {
                seconds.innerHTML = "0" + getSeconds;
            } else {
                seconds.innerHTML = getSeconds;
            }

            if (getSeconds >= 60) {
                getSeconds = 0;
                getMinutes++;
                if (getMinutes < 10) {
                    minute.innerHTML = "0" + getMinutes;
                } else {
                    minute.innerHTML = getMinutes;
                }
            }

            if (getMinutes >= 60) {
                getMinutes = 0;
                getHours++;
                if (getHours < 10) {
                    hour.innerHTML = "0" + getHours;
                } else {
                    hour.innerHTML = getHours;
                }
            }
        }, 1000);
    };

    this.stop = function() {
        clearInterval(interval);
    };

    this.reset = function() {
        getSeconds = 0;
        getMinutes = 0;
        getHours = 0;

        seconds.innerHTML = "00";
        minute.innerHTML = "00:";
        hour.innerHTML = "00:";
        clearInterval(interval);
    };
}

let object = new stopwatch();
