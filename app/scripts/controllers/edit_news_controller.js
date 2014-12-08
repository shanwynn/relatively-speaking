Rs.EditNewsController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('news');
  }
}
});
