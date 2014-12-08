Rs.EditNewsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('news', params.id);
  }
});
