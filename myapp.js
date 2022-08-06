document.addEventListener("DOMContentLoaded", () => {
    var timer = null;
    document.querySelector("#submit").addEventListener('click', () => {
        let minutes = document.querySelector("#minutes").value;
        let seconds = document.querySelector("#seconds").value;
        countdown = document.querySelector("#clock");

        clearInterval(timer);
        timer = setInterval(showTime, 1000);
        function showTime() {
            if (minutes == 0) {
                if (seconds == 0) {
                    clearInterval(timer);
                } else {
                    seconds--;
                }
            } else {
                if(seconds == 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
            }
            countdown.innerHTML = `${minutes}:${seconds}`;
        }
    });
});


    
