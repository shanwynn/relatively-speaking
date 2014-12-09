Rs.EditAnniversaryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('anniversary', params.id);
  }
});
