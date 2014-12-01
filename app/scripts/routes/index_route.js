Relativelyspeaking.IndexRoute = Relativelyspeaking.ApplicationRoute.extend({
  model: function() {
    return this.store.find('recipe');
  }
});
