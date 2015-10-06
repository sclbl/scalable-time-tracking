Template.times.events({
  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this tracked time?')) {
      Times.remove({ _id: this._id });
    }
  }
});

Template.times.helpers({
  times: () => {
    return Times.find({}, { sort: { createdAt: -1 } });
  },

  elapsedTime: (startDate, endDate) => {
    let difference = endDate.getTime() - startDate.getTime();

    let hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);

    let seconds = Math.floor(difference / (1000));
    difference -= seconds * (1000);

    return `${hours}:${minutes}:${seconds}`;
  }
});
