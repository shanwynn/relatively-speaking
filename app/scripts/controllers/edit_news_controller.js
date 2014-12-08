Rs.EditNewsController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('news');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete this news item?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('news');
      }
    }
  }
});
