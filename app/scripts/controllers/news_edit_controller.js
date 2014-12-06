Rs.NewsEditController = Ember.ObjectController.extend({
  needs: ['news'],

  actions: {
    editNews: function () {
      this.get('model').save();
      this.transitionToRoute('news');
    }
  }
});
