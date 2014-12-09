Rs.EditBirthdayRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('birthday', params.id);
  }
});
