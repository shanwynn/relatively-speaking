Rs.RecipesController = Ember.ArrayController.extend({
  actions: {
    destroy: function () {
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('recipes');
    }
  }
});
