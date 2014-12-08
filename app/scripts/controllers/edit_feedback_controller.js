Rs.EditFeedbackController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('feedback');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete your feedback?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('feedback');
      }
    }
  }
});
