Rs.bdayannivRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('b-a');
  }
});
