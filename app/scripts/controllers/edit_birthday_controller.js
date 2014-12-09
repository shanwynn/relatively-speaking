Rs.EditBirthdayController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('birthdays');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete this birthday?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('birthdays');
      }
    }
  }
});
