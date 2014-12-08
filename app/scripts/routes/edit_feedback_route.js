Rs.EditFeedbackRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('feedback', params.id);
  }
});
