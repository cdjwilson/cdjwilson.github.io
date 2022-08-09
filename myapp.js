document.addEventListener("DOMContentLoaded", () => {
    var timer = null;
    //let countdown = document.querySelector("#clock");
    //countdown.innerHTML = `0:0`;
    document.querySelector("#add_interval").addEventListener('click', () => {
        let time_containers = Array.from(document.querySelectorAll(".time_container"));
        if (time_containers.length < 7) {
            let time_container = time_containers.pop();
            let new_container = document.createElement('div');
            new_container.classList.add("time_container");
            new_container.innerHTML = time_container.innerHTML;
            time_container.insertAdjacentElement('afterend', new_container);
        }
    });

    document.querySelector("#remove_interval").addEventListener('click', () => {
        let time_containers = Array.from(document.querySelectorAll(".time_container"));
        if (time_containers.length > 1) {
            let time_container = time_containers.pop();
            time_container.remove();
        }
    });

    document.querySelector("#create_timer").addEventListener('click', () => {
        document.querySelector(".timer_setup").style.display = "none";
        let timer_display = document.querySelector(".timer_display");
        timer_display.style.display = "flex";
        let minutes = Array.from(document.querySelectorAll("#minutes"));
        let seconds = Array.from(document.querySelectorAll("#seconds"));
        let sets = document.querySelector("#set_count").value;
        let countdown_timer = document.querySelector(".countdown_timer");
        countdown_timer.style.fontSize = "96px"
        countdown_timer.innerHTML = `${minutes[0].value}:${seconds[0].value}`;
        document.querySelector("#start_timer").addEventListener("click", () => {
            clearInterval(timer);
            let minute = [];
            let second = [];
            for (let i = 0; i < sets; i++) {
                for (let j = 0; j < minutes.length; j++) {
                    minute.push(minutes[j].value);
                    second.push(seconds[j].value);
                }
            }
            let i = 0;
            timer = setInterval(() => {
                if (minute[i] == 0) {
                    if (second[i] == 0) {
                        if (i < minute.length-1) {
                            i++;
                        } else {
                            clearInterval(timer);
                        }
                    } else {
                        second[i]--;
                    }
                } else {
                    if(second[i] == 0) {
                        minute[i]--;
                        second[i] = 59;
                    } else {
                        second[i]--;
                    }
                }
                countdown_timer.innerHTML = `${minute[i]}:${second[i]}`;
            }, 1000);
            document.querySelector("#reset_timer").addEventListener('click', () => {
                clearInterval(timer);
                document.querySelector("#create_timer").click();
            });
        });
    });

    document.querySelector("#create_new_timer").addEventListener('click', () => {
        clearInterval(timer);
        document.querySelector(".timer_setup").style.display = "flex";
        let timer_display = document.querySelector(".timer_display");
        timer_display.style.display = "none";
    });
});


    
