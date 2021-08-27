$(function () {});
  
/*Using moment, i'm creating variables to use for functions */
var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");

/*creating another variable with events for each time of the day */
var planWorkday = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
  ];