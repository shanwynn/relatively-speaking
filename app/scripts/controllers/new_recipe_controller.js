Relativelyspeaking.NewRecipeController = Ember.Controller.extend({
  actions: {
    save: function() {
      var recipe = this.store.createRecord('recipe', {
        name:        this.get('name'),
        description: this.get('description'),
        imageURL:    this.get('imageURL'),
        ingredients: this.get('ingredients'),
        directions:  this.get('directions')
      });
      recipe.save();
      this.transitionToRoute('index');
    }
  }
});
