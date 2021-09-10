var dayNames = [
  "Sunday ",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

$(document).ready(function () {
  window.setInterval(function () {
    var time = new Date();
    var month = monthNames[time.getMonth()];
    var day = time.getDate();
    var weekday = dayNames[time.getDay()];
    var year = time.getFullYear();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var meridian = "AM";

    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    $("#digi-clock").empty();
    $("#digi-clock").append(
      weekday +
        "<br>" +
        month +
        " " +
        day +
        ", " +
        year +
        "<br>" +
        hours +
        ":" +
        minutes +
        ":" +
        seconds +
        " " +
        meridian
    );

    var sec_degrees = 6 * seconds + 180;
    $("#sec-hand")
      .css("-webkit-transform", "rotate(" + sec_degrees + "deg)")
      .css("visibility", "visible");
    var min_degrees = 6 * minutes + 180;
    $("#min-hand")
      .css("-webkit-transform", "rotate(" + min_degrees + "deg)")
      .css("visibility", "visible");
    var hour_degrees = 30 * hours + 180;
    $("#hour-hand")
      .css("-webkit-transform", "rotate(" + hour_degrees + "deg)")
      .css("visibility", "visible");
  }, 1000);
});
