Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();
  },

  'click button': function (event, template) {
    if (event.currentTarget.dataset.action === 'start') {
      if (template.find('input').value.length === 0) {
        alert('Please fill out what you are working on first.');
      } else {
        Session.set('startDate', new Date());
        $('[data-action=start]').toggle();
        $('[data-action=stop]').toggle();
      }
    } else {
      Session.set('endDate', new Date());

      const task = template.find('input').value;

      Times.insert({ task: task, startDate: Session.get('startDate'), endDate: Session.get('endDate'), createdAt: new Date() });

      // reset all values
      template.find('input').value = '';
      $('[data-action=start]').toggle();
      $('[data-action=stop]').toggle();
      Session.set('startDate', '');
      Session.set('endDate', '');
    }
  }
});

Template.form.onRendered(function () {
  Session.set('startDate', '');
  Session.set('endDate', '');
});
