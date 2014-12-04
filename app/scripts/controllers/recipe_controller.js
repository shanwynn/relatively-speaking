Rs.RecipeController = Ember.Controller.extend({

/*  showIngredients: true,
  showDirections: true,*/

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
      var recipe = this.store.createRecord('news', {
        name:        this.get('name'),
        category:    this.get('category'),
        imageURL:    this.get('imageURL'),
        ingredients: this.get('ingredients'),
        directions:  this.get('directions')
      });
        recipe.save();
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
