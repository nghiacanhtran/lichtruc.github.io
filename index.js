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
      dateRoot: new Date(2020, 11, 18),
      numberBetweenTwoWeek: 6,
    };
  };

  let getWeeksBetween = (d1, d2) => {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  };

  let getMondays = () => {
    var d = new Date(),
      month = d.getMonth(),
      mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
      d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
      mondays.push(new Date(d.getTime()));
      d.setDate(d.getDate() + 7);
    }

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
    console.log(arrDayPick);
    return arrDayPick;
  };

  return {
    getArrDate: getArrDate,
    getMondays: getMondays,
  };
})();
