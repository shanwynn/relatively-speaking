Rs.IndexRoute = Rs.ApplicationRoute.extend({
  model: function() {
    return this.store.find('recipe');
  }
});
