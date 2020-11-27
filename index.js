jQuery(document).ready(function () {
  $("#date_instance").datepicker({});
  $("#date_instance").datepicker("setDate", calculate.setDate());
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

  let setDate = () => {
    var tomorrow = new Date();
    let distanceWeek = getWeeksBetween(new Date(), config().dateRoot) - 1;
    let distanceDate = distanceWeek * config().numberBetweenTwoWeek;
    tomorrow.setDate(config().dateRoot.getDate() + distanceDate);
    return tomorrow;
  };

  return {
    setDate: setDate,
  };
})();
