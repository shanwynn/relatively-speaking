Relativelyspeaking.EditRecipeRoute = Relativelyspeaking.AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('recipe', params.id);
  }
});
