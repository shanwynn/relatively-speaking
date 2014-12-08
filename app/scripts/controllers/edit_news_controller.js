Rs.EditNewsController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('news');
   },
  destroy: function () {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('news');
   }
  }
});
