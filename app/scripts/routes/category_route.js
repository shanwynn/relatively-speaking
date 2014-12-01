Relativelyspeaking.CategoryRoute = Relativelyspeaking.ApplicationRoute.extend({
  model: function (params) {
    return this.store.find('recipe');
  }
});
