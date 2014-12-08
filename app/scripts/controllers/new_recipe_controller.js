Rs.NewRecipeController = Ember.ArrayController.extend({

  showIngredients: true,
  showDirections: true,

  splitDirections: function () {
    return this.get('directions').split(',');
  }.property('directions'),

  splitIngredients: function () {
    return this.get('ingredients').split(',');
  }.property('ingredients'),

  actions: {
    toggleDirections: function() {
      this.toggleProperty('showDirections');
    },
    toggleIngredients: function () {
      this.toggleProperty('showIngredients');
    },
    save: function() {
      var recipeRecord = this.store.createRecord('recipe', {
        recipeName:  this.get('recipeName'),
        category:    this.get('category'),
        imageURL:    this.get('imageURL'),
        ingredients: this.get('ingredients'),
        directions:  this.get('directions')
      });
      recipeRecord.save();
      this.transitionToRoute('recipes');
    }
  }
});
