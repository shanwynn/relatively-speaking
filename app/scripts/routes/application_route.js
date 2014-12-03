Rs.ApplicationRoute = Rs.ApplicationRoute.extend({
  model: function() {
    return this.store.find('index');
  }
});
