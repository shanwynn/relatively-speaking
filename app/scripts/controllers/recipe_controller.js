Rs.RecipeController = Ember.ObjectController.extend({
  needs: ['application'],

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
  }
});
