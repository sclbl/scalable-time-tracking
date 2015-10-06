Times = new Mongo.Collection('times');

Times.allow({
  insert: (userId, document) => {
    if (document.task.length !== 0 && document.startDate !== undefined && document.endDate !== undefined) {
      return true;
    }
  },

  remove: (userId, document) => {
    return true;
  }
});

