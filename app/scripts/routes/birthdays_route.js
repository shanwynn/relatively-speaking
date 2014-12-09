Rs.BirthdaysRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('birthday');
  }
});
