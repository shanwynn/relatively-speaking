Rs.EditAnniversaryController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('anniversaries');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete this anniversary?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('anniversaries');
      }
    }
  }
});
