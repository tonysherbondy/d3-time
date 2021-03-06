var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeHour.every(step) returns every stepth hour, starting with the first hour of the day", function(test) {
  test.deepEqual(time.timeHour.every(4).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 31, 13, 57)), [date.local(2008, 11, 30, 16), date.local(2008, 11, 30, 20), date.local(2008, 11, 31, 0), date.local(2008, 11, 31, 4), date.local(2008, 11, 31, 8), date.local(2008, 11, 31, 12)]);
  test.deepEqual(time.timeHour.every(12).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 31, 13, 57)), [date.local(2008, 11, 31, 0), date.local(2008, 11, 31, 12)]);
  test.end();
});
