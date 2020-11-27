jQuery(document).ready(function () {
  $("#date_instance").datepicker({
    language: "vi",
    multidate: true,
  });
  $("#date_instance").datepicker("setDates", calculate.getArrDate());
});

var calculate = (function () {
  var config = () => {
    return {
      dateRoot: new Date(2020, 11, 6),
      numberBetweenTwoWeek: 6,
    };
  };

  let getWeeksBetween = (d1, d2) => {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  };

  let getMondays = () => {
    var mondays = [];

    var monday = moment().startOf("month").day("Monday");
    if (monday.date() > 7) {
      monday.add(7, "d");
    }
    var month = monday.month();
    while (month === monday.month()) {
      mondays.push(new Date(monday.toDate()));

      monday.add(7, "d");
    }
    console.log(mondays);
    return mondays;
  };

  let getArrDate = () => {
    var listMonDays = getMondays();
    var arrDayPick = [];

    listMonDays.forEach((element) => {
      let distanceWeek = getWeeksBetween(element, config().dateRoot) - 1;
      let distanceDate = distanceWeek * config().numberBetweenTwoWeek;
      element.setDate(config().dateRoot.getDate() + distanceDate);
      arrDayPick.push(element);
    });

    // var tomorrow = new Date();
    // let distanceWeek = getWeeksBetween(new Date(), config().dateRoot) - 1;
    // let distanceDate = distanceWeek * config().numberBetweenTwoWeek;
    // tomorrow.setDate(config().dateRoot.getDate() + distanceDate);
    // return tomorrow;

    return arrDayPick;
  };

  return {
    getArrDate: getArrDate,
    getMondays: getMondays,
  };
})();
