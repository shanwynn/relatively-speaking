Rs.NewsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('news');
  }
});
