Relativelyspeaking.RecipeController = Ember.ObjectController.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias ('controllers.application.isLoggedIn'),
  ingredientCount: Ember.computed.alias('splitIngredients.length'),
  directionCount: Ember.computed.alias('splitDirections.length'),

  showIngredients: true,
  showDirections: true,

  splitDirections: function () {
    return this.get('directions').split(',');
  }.property('directions'),

  splitIngredients: function () {
    return this.get('ingredients').split(',');
  }.property('ingredients'),

  markedDescription: function () {
    return marked(this.get('description') || '');
  }.property('description'),

  categoryName: function () {
    var category = Relativelyspeaking.CATEGORIES.findBy('id', this.get('category'));
    if (category)
      return category.name;
  }.property('category'),

  actions: {
    toggleDirections: function() {
      this.toggleProperty('showDirections');
    },
    toggleIngredients: function () {
      this.toggleProperty('showIngredients');
    },
    destroy: function () {
      if (confirm('Are you sure you want to delete this recipe?')) {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('index');
      }
    }
  }
});
