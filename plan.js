window.onload=function () {
    let bar=document.getElementById('plan_bar');
    let count=document.getElementById('count');
    let bar_width=0;

    function grow() {
        if (bar_width<100){
            bar_width++;
            bar.style.width=bar_width+'%';
            count.innerHTML=bar_width;
        }else {
            clearInterval(timer);
        }
    }

    let timer=setInterval(grow,100);
};
