// 曜日を表す文字列の配列を作っておく
var WeekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];
 
// 日付オブジェクトから曜日を得る
var dObj = new Date("1990/3/22");
var wDay = dObj.getDay();
alert("指定の日は、" + WeekChars[wDay] + "です。");