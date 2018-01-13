$(function() {
    var days = $('.days'),
        hours = $('.hours'),
        minutes = $('.minutes'),
        seconds = $('.seconds');

    var currSecond = +seconds.text(),
        currMinute = +minutes.text(),
        currHour = +hours.text(),
        currDay = +days.text();
    
    var totalSeconds = currSecond + currMinute*60 + currHour*3600 + currDay*24*3600;
    
    function calculateTime() {
        totalSeconds--;
        if(totalSeconds === 0) {
            clearInterval(interval)
        };
        seconds.text(getSeconds(totalSeconds));
        minutes.text(getMinutes(totalSeconds));
        hours.text(getHours(totalSeconds));
        days.text(getDays(totalSeconds));
    }

    function getSeconds(totalSeconds) {
        return totalSeconds%60;
    }

    function getMinutes(totalSeconds) {
        return (Math.floor(totalSeconds/60) - 60*Math.floor(totalSeconds/3600));
    }

    function getHours(totalSeconds) {
        return Math.floor(totalSeconds/3600) - 24*getDays(totalSeconds);
    }

    function getDays(totalSeconds) {
        return Math.floor(totalSeconds/(3600*24));
    }

    var interval = setInterval(calculateTime,1000);
});