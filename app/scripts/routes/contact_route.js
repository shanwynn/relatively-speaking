Rs.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact');
  }
});
